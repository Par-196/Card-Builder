import './ProductBuilderBookletPage.css'
import ProductBuilderBookletCardHeaderBar from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletHeaderBar/ProductBuilderBookletHeaderBar.jsx'
import ProductBuilderBookletMainContent from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletMainContent/ProductBuilderBookletMainContent.jsx'
import ProductBuilderBookletFooterBar from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletFooterBar/ProductBuilderBookletFooterBar.jsx'
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductBuilderBookletPage() {
    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('A4');
    const [folds, setFolds] = useState('Один');
    const [lamination, setLamination] = useState('Матова');

    const location = useLocation();
    const selectedTitle = location.state || 'Буклет';

    const priceData = [
        { format: 'A4', folds: 'Один', prices: { '5001-10000': 18.75, '1001-5000': 27.40, '501-1000': 32.85, '101-500': 45.10, '51-100': 50.20, '21-50': 66.35, '11-20': 73.90, '1-10': 149.80 } },
        { format: 'A4', folds: 'Два', prices: { '5001-10000': 20.30, '1001-5000': 29.90, '501-1000': 35.60, '101-500': 47.80, '51-100': 54.70, '21-50': 69.40, '11-20': 78.50, '1-10': 155.30 } },
    ];

    const laminationData = [
        { format: 'A4', lamination: 'Глянцева', prices: { '5001-10000': 0.95, '1001-5000': 1.30, '501-1000': 1.80, '101-500': 2.50, '51-100': 3.60, '21-50': 4.50, '11-20': 6.00, '1-10': 8.50 } },
        { format: 'A4', lamination: 'Матова', prices: { '5001-10000': 1.10, '1001-5000': 1.50, '501-1000': 2.10, '101-500': 2.90, '51-100': 4.20, '21-50': 5.30, '11-20': 6.80, '1-10': 9.30 } },
    ];

    function getRange(units) {
        const n = Number(units);
        if (n >= 5001) return '5001-10000';
        if (n >= 1001) return '1001-5000';
        if (n >= 501) return '501-1000';
        if (n >= 101) return '101-500';
        if (n >= 51) return '51-100';
        if (n >= 21) return '21-50';
        if (n >= 11) return '11-20';
        return '1-10';
    }

    function getUnitPrice(units, format, folds, lamination) {
        if (!units || isNaN(units)) return 0;
        const range = getRange(units);

        const baseProduct = priceData.find((item) => item.format === format && item.folds === folds);
        const laminationProduct = laminationData.find((item) => item.format === format && item.lamination === lamination);

        if (!baseProduct || !laminationProduct) return 0;

        const basePrice = baseProduct.prices[range] || 0;
        const laminationPrice = laminationProduct.prices[range] || 0;

        return basePrice + laminationPrice;
    }

    const unitPrice = useMemo(() => getUnitPrice(Number(units), format, folds, lamination), [units, format, folds, lamination]);

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
            description: `Формат: ${orderData.format}, Друк: ${orderData.folds}, Ламінація: ${orderData.lamination}`,
            amount: parseInt(orderData.quantity),
            totalPrice: parseFloat(orderData.price),
        };
        console.log(orderPayload);

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
        <div className='product-builder-booklet-page-container'>
            <ProductBuilderBookletCardHeaderBar
                format={format}
                setFormat={setFormat}
                folds={folds}
                setFolds={setFolds}
                orderData={{
                    product: selectedTitle,
                    format,
                    folds,
                    lamination,
                    quantity: units,
                    price: totalPrice,
                }}
                onCreateOrder={handleCreateOrder}
            />
            <ProductBuilderBookletMainContent />
            <ProductBuilderBookletFooterBar
                price={totalPrice}
                units={units}
                onUnitsChange={setUnits}
                lamination={lamination}
                setLamination={setLamination}
            />
        </div>
    );
}
