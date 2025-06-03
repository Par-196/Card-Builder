import './ProductBuilderEnvelopePage.css';
import ProductBuilderEnvelopeHeaderBar from '../../../components/productBuilderItems/productBuilderEnvelope/productBuilderEnvelopeHeaderBar/ProductBuilderEnvelopeHeaderBar';
import ProductBuilderEnvelopeMainContent from '../../../components/productBuilderItems/productBuilderEnvelope/productBuilderEnvelopeMainContent/ProductBuilderEnvelopeMainContent';
import ProductBuilderEnvelopeFooterBar from '../../../components/productBuilderItems/productBuilderEnvelope/productBuilderEnvelopeFooterBar/ProductBuilderEnvelopeFooterBar';
import React, { useState, useMemo } from 'react';
import axios from 'axios';

export default function ProductBuilderEnvelopePage() {
    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('Євро');
    const [paper, setPaper] = useState('Офсетний');

    const envelopePriceData = [
        {
            format: 'C6',
            paper: 'Офсетний',
            prices: {
                '501-1000': 20.00,
                '101-500': 30.00,
                '51-100': 40.00,
                '1-50': 50.00,
            }
        },
        {
            format: 'Євро',
            paper: 'Офсетний',
            prices: {
                '501-1000': 50.00,
                '101-500': 60.00,
                '51-100': 70.00,
                '1-50': 80.00,
            }
        },
    ];

    function getEnvelopeRange(units) {
        const n = Number(units);
        if (n >= 501) return '501-1000';
        if (n >= 101) return '101-500';
        if (n >= 51) return '51-100';
        return '1-50';
    }

    function getEnvelopeUnitPrice(units, format, paper) {
        if (!units || isNaN(units)) return 0;
        const range = getEnvelopeRange(units);
        const product = envelopePriceData.find(
            (item) => item.format === format && item.paper === paper
        );
        return product?.prices?.[range] ?? 0;
    }

    const unitPrice = useMemo(
        () => getEnvelopeUnitPrice(Number(units), format, paper),
        [units, format, paper]
    );

    const totalPrice = useMemo(() => {
        if (!units || isNaN(units)) return 0;
        return (unitPrice * units).toFixed(2);
    }, [unitPrice, units]);

    const handleCreateOrder = async (orderData) => {
        const orderPayload = {
            item: 'Envelope',
            status: 'Processing',
            description: `Формат: ${orderData.format}, Папір: ${orderData.paper}`,
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
        <div className='product-builder-envelope-page-container'>
            <ProductBuilderEnvelopeHeaderBar
                format={format}
                setFormat={setFormat}
                paper={paper}
                setPaper={setPaper}
                orderData={{
                    product: 'Конверт',
                    paper,
                    format,
                    quantity: units,
                    price: totalPrice,
                }}
                onCreateOrder={handleCreateOrder}
            />

            <ProductBuilderEnvelopeMainContent />

            <ProductBuilderEnvelopeFooterBar
                price={totalPrice}
                units={units}
                onUnitsChange={setUnits}
            />
        </div>
    );
}
