import './ProductBuilderPosterPage.css';
import ProductBuilderPosterHeaderBar from '../../../components/productBuilderItems/productBuilderPoster/productBuilderPosterHeaderBar/ProductBuilderPosterHeaderBar';
import ProductBuilderPosterMainContent from '../../../components/productBuilderItems/productBuilderPoster/productBuilderPosterMainContent/ProductBuilderPosterMainContent';
import ProductBuilderPosterFooterBar from '../../../components/productBuilderItems/productBuilderPoster/productBuilderPosterFooterBar/ProductBuilderPosterFooterBar';
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductBuilderPosterPage() {
    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('A0');
    const [paperType, setPaperType] = useState('Крейдований');
    const [lamination, setLamination] = useState('Матова');

    const location = useLocation();
    const selectedTitle = location.state || 'Плакат';

    const priceData = [
        {
            format: 'A0',
            prices: {
                'Крейдований': { '10': 470, '2-9': 495, '1': 520 },
                'Фотопапір': { '10': 740, '2-9': 760, '1': 780 },
            },
        },
        {
            format: 'A1',
            prices: {
                'Крейдований': { '10': 340, '2-9': 360, '1': 380 },
                'Фотопапір': { '10': 420, '2-9': 440, '1': 460 },
            },
        },
        {
            format: 'A2',
            prices: {
                'Крейдований': { '10': 160, '2-9': 175, '1': 190 },
                'Фотопапір': { '10': 250, '2-9': 260, '1': 270 },
            },
        },
    ];

    const laminationData = [
        {
            format: 'A0',
            prices: {
                'Глянцева': { '10': 70, '2-9': 80, '1': 90 },
                'Матова': { '10': 80, '2-9': 90, '1': 100 },
            },
        },
        {
            format: 'A1',
            prices: {
                'Глянцева': { '10': 50, '2-9': 55, '1': 60 },
                'Матова': { '10': 60, '2-9': 65, '1': 70 },
            },
        },
        {
            format: 'A2',
            prices: {
                'Глянцева': { '10': 30, '2-9': 35, '1': 40 },
                'Матова': { '10': 35, '2-9': 40, '1': 45 },
            },
        },
    ];

    function getRange(units) {
        const n = Number(units);
        if (n >= 10) return '10';
        if (n >= 2) return '2-9';
        return '1';
    }

    function getUnitPrice(units, format, paperType, lamination) {
        if (!units || isNaN(units)) return 0;
        const range = getRange(units);

        const baseProduct = priceData.find(item => item.format === format);
        const laminationProduct = laminationData.find(item => item.format === format);

        if (!baseProduct || !laminationProduct) return 0;

        const basePrice = baseProduct.prices[paperType]?.[range] || 0;
        const laminationPrice = laminationProduct.prices[lamination]?.[range] || 0;

        return basePrice + laminationPrice;
    }

    const unitPrice = useMemo(() => getUnitPrice(Number(units), format, paperType, lamination), [units, format, paperType, lamination]);

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
        'Флаєр': 'Flyer',
    };

    const handleCreateOrder = async (orderData) => {
        const orderPayload = {
            item: productMap[orderData.product],
            status: "Processing",
            description: `Формат: ${orderData.format}, Папір: ${orderData.paperType}, Ламінація: ${orderData.lamination}`,
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
        <div className='product-builder-poster-page-container'>
            <ProductBuilderPosterHeaderBar
                format={format}
                setFormat={setFormat}
                paperType={paperType}
                setPaperType={setPaperType}
                orderData={{
                    product: selectedTitle,
                    format,
                    paperType,
                    lamination,
                    quantity: units,
                    price: totalPrice,
                }}
                onCreateOrder={handleCreateOrder}
            />
            <ProductBuilderPosterMainContent />
            <ProductBuilderPosterFooterBar
                price={totalPrice}
                units={units}
                onUnitsChange={setUnits}
                lamination={lamination}
                setLamination={setLamination}
            />
        </div>
    );
}
