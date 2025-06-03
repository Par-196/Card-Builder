import './ProductBuilderNotepadPage.css'
import ProductBuilderNotepadHeaderBar from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadHeaderBar/ProductBuilderNotepadHeaderBar.jsx';
import ProductBuilderNotepadMainContent from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadMainContent/ProductBuilderNotepadMainContent.jsx';
import ProductBuilderNotepadFooterBar from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadFooterBar/ProductBuilderNotepadFooterBar.jsx';
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductBuilderNotepadPage() {

    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('A4');
    const [wireBinding, setWireBinding] = useState('');
    const [ribbon, setRibbon] = useState('');

    const location = useLocation();
    const selectedTitle = location.state;

    const basePriceData = [
    {
        format: 'A4',
        prices: {'1': 320.5,'2-4': 275.9,'5-6': 250.4,'7-10': 235.3,'11-12': 220.8,'13-15': 210.5,}
    },
    {
        format: 'A5',
        prices: {'1': 270.4,'2-4': 225.8,'5-6': 200.3,'7-10': 189.6,'11-12': 175.9,'13-15': 165.4,}
    },
    {
        format: 'A6',
        prices: {'1': 185.6,'2-4': 150.8,'5-6': 130.5,'7-10': 118.9,'11-12': 105.3,'13-15': 95.2,}
    }
];

const postPrintingData = [
    {
        format: 'A4',
        ribbon: {'1': 18,'2-4': 15,'5-6': 12,'7-10': 10,'11-12': 9,'13-15': 8,},
        wireBinding: {'1': 30,'2-4': 25,'5-6': 22,'7-10': 20,'11-12': 19,'13-15': 18,}
    },
    {
        format: 'A5',
        ribbon: {'1': 15,'2-4': 12,'5-6': 10,'7-10': 8,'11-12': 7,'13-15': 6,},
        wireBinding: {'1': 25,'2-4': 20,'5-6': 18,'7-10': 17,'11-12': 16,'13-15': 15,}
    },
    {
        format: 'A6',
        ribbon: {'1': 12,'2-4': 9,'5-6': 7,'7-10': 6,'11-12': 5,'13-15': 4,},
        wireBinding: {'1': 20,'2-4': 17,'5-6': 15,'7-10': 14,'11-12': 13,'13-15': 12,}
    }
];

    function getRange(units) {
    const n = Number(units);
    if (n >= 13) return '13-15';
    if (n >= 11) return '11-12';
    if (n >= 7) return '7-10';
    if (n >= 5) return '5-6';
    if (n >= 2) return '2-4';
    return '1';
}

    function getBasePrice(units, format) {
        const range = getRange(units);
        if (!range) return 0;
        const product = basePriceData.find(p => p.format === format);
        if (!product) return 0;
        return product.prices[range] || 0;
    }

    function getPostPrintingPrice(units, format, service) {
        if (!service) return 0;
        const serviceKeyMap = {
            'Стрічка': 'ribbon',
            'Пружинка': 'wireBinding',
        };
        const key = serviceKeyMap[service];
        if (!key) return 0;
        const range = getRange(units);
        if (!range) return 0;
        const product = postPrintingData.find(p => p.format === format);
        if (!product) return 0;
        return product[key]?.[range] || 0;
    }

    const unitPrice = useMemo(() => {
        if (!units || isNaN(units)) return 0;
        const base = getBasePrice(Number(units), format);
        const ribbonPrice = getPostPrintingPrice(Number(units), format, ribbon);
        const wirePrice = getPostPrintingPrice(Number(units), format, wireBinding);
        return base + ribbonPrice + wirePrice;
    }, [units, format, ribbon, wireBinding]);

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
        'Блокнот': 'Notepad',
    };

    const handleCreateOrder = async (orderData) => {
        const orderPayload = {
            item: productMap[orderData.product],
            status: "Processing",
            description: `Формат: ${orderData.format}, Пружинка: ${orderData.wireBinding || 'немає'}, Стрічка: ${orderData.ribbon || 'немає'}`,
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
        <div className='product-builder-notepad-page-container'>
            <ProductBuilderNotepadHeaderBar
                format={format}
                setFormat={setFormat}
                wireBinding={wireBinding}
                setWireBinding={setWireBinding}
                orderData={{
                    product: selectedTitle,
                    format,
                    wireBinding,
                    ribbon,
                    quantity: units,
                    price: totalPrice,
                }}
                onCreateOrder={handleCreateOrder}
            />
            <ProductBuilderNotepadMainContent />
            <ProductBuilderNotepadFooterBar
                price={totalPrice}
                units={units}
                onUnitsChange={setUnits}
                ribbon={ribbon}
                setRibbon={setRibbon}
                wireBinding={wireBinding}
                setWireBinding={setWireBinding}
            />
        </div>
    );
}
