import './ProductBuilderTagPage.css';
import ProductBuilderTagHeaderBar from '../../../components/productBuilderItems/productBuilderTag/productBuilderTagHeaderBar/productBuilderTagHeaderBar';
import ProductBuilderTagMainContent from '../../../components/productBuilderItems/productBuilderTag/productBuilderTagMainContent/productBuilderTagMainContent';
import ProductBuilderTagFooterBar from '../../../components/productBuilderItems/productBuilderTag/productBuilderTagFooterBar/ProductBuilderTagFooterBar';
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductBuilderTagPage() {
    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('Стандартний');
    const [print, setPrint] = useState('Одностр');
    const [lamination, setLamination] = useState('Матова');

    const location = useLocation();
    const selectedTitle = location.state;

    const priceData = [
        {
            format: 'Євро',
            print: 'Одностр',
            prices: { '500+': 1.50, '101-500': 1.80, '51-100': 2.30, '11-50': 2.80, '1-10': 3.50 },
        },
        {
            format: 'Євро',
            print: 'Двостр',
            prices: { '500+': 2.10, '101-500': 2.50, '51-100': 3.00, '11-50': 3.70, '1-10': 4.60 },
        },
        {
            format: 'Стандартний',
            print: 'Одностр',
            prices: { '500+': 1.30, '101-500': 1.60, '51-100': 2.00, '11-50': 2.50, '1-10': 3.20 },
        },
        {
            format: 'Стандартний',
            print: 'Двостр',
            prices: { '500+': 1.90, '101-500': 2.30, '51-100': 2.80, '11-50': 3.40, '1-10': 4.20 },
        },
    ];

    const laminationData = [
        {
            format: 'Євро',
            lamination: 'Матова',
            prices: { '500+': 0.65, '101-500': 0.75, '51-100': 0.90, '11-50': 1.20, '1-10': 1.50 },
        },
        {
            format: 'Євро',
            lamination: 'Глянцева',
            prices: { '500+': 0.70, '101-500': 2.50, '51-100': 0.95, '11-50': 1.30, '1-10': 1.60 },
        },
        {
            format: 'Стандартний',
            lamination: 'Матова',
            prices: { '500+': 0.60, '101-500': 0.70, '51-100': 0.85, '11-50': 1.10, '1-10': 1.40 },
        },
        {
            format: 'Стандартний',
            lamination: 'Глянцева',
            prices: { '500+': 0.65, '101-500': 0.75, '51-100': 0.90, '11-50': 1.20, '1-10': 1.50 },
        },
    ];

    function getRange(units) {
        const n = Number(units);
        if (n >= 500) return '500+';
        if (n >= 101) return '101-500';
        if (n >= 51) return '51-100';
        if (n >= 11) return '11-50';
        return '1-10';
    }

    function getUnitPrice(units, format, print, lamination) {
        if (!units || isNaN(units)) return 0;
        const range = getRange(units);

        const baseProduct = priceData.find((item) => item.format === format && item.print === print);
        const laminationProduct = laminationData.find((item) => item.format === format && item.lamination === lamination);

        if (!baseProduct || !laminationProduct) return 0;

        const basePrice = baseProduct.prices[range] || 0;
        const laminationPrice = laminationProduct.prices[range] || 0;

        return basePrice + laminationPrice;
    }

    const unitPrice = useMemo(() => getUnitPrice(Number(units), format, print, lamination), [units, format, print, lamination]);

    const totalPrice = useMemo(() => {
        if (!units || isNaN(units)) return 0;
        return (unitPrice * units).toFixed(2);
    }, [unitPrice, units]);

    const productMap = {
        'Листівка': 'Postcard',
        'Буклет': 'Booklet',
        'Зошит': 'Notebook',
        'Візитка': 'BusinessCard',
        'Плакат': 'Poster',
        'Тег': 'Tag',
        'Конверт': 'Envelope',
        'Флаєр': 'Flyer'
    };

    const handleCreateOrder = async (orderData) => {
        const orderPayload = {
            item: productMap[orderData.product],
            status: "Processing",
            description: `Формат: ${orderData.format}, Друк: ${orderData.print}, Ламінація: ${orderData.lamination}`,
            amount: parseInt(orderData.quantity),
            totalPrice: parseFloat(orderData.price),
        };

        try {
            const token = localStorage.getItem('token');
            const apiUrl = 'https://localhost:7117';
            const response = await axios.post(`${apiUrl}/orders`, orderPayload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Замовлення створено успішно!');
            console.log('Order response:', response);
        } catch (error) {
            console.error('Помилка при створенні замовлення:', error);
            alert('Помилка при створенні замовлення.');
        }
    };

    return (
        <div className='product-builder-tag-page-container'>
            <ProductBuilderTagHeaderBar
                format={format}
                setFormat={setFormat}
                print={print}
                setPrint={setPrint}
                orderData={{
                    product: selectedTitle,
                    format,
                    print,
                    lamination,
                    quantity: units,
                    price: totalPrice,
                }}
                onCreateOrder={handleCreateOrder}
            />
            <ProductBuilderTagMainContent />
            <ProductBuilderTagFooterBar
                price={totalPrice}
                units={units}
                onUnitsChange={setUnits}
                lamination={lamination}
                setLamination={setLamination}
            />
        </div>
    );
}