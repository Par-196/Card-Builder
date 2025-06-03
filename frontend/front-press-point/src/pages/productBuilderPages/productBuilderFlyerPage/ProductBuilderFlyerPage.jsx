import './ProductBuilderFlyerPage.css';
import ProductBuilderFlyerHeaderBar from '../../../components/productBuilderItems/productBuilderFlyer/productBuilderFlyerHeaderBar/ProductBuilderFlyerHeaderBar';
import ProductBuilderFlyerMainContent from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadMainContent/ProductBuilderNotepadMainContent';
import ProductBuilderFlyerFooterBar from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadFooterBar/ProductBuilderNotepadFooterBar';
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductBuilderFlyerPage() {
    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('Стандарт');
    const [print, setPrint] = useState('Одностр');
    const [lamination, setLamination] = useState('Матова');

    const location = useLocation();
    const selectedTitle = location.state || 'Флаєр';

    const priceData = [
        {
            format: 'Стандарт',
            print: 'Одностр',
            prices: { '5001-10000': 4.20,'1001-5000': 6.20,'501-1000': 8.30,'201-500': 10.00,'1-200': 12.00  }
        },
        {
            format: 'Стандарт',
            print: 'Двостр',
            prices: {'5001-10000': 4.58,'1001-5000': 6.87,'501-1000': 9.30,'201-500': 12.00,'1-200': 13.00 }
        }
    ];

    const laminationData = [
        {
            format: 'Стандарт',
            lamination: 'Глянцева',
            prices: {'5001-10000': 1.30,'1001-5000': 1.70,'501-1000': 2.10,'201-500': 2.80,'1-200': 3.50
            }
        },
        {
            format: 'Стандарт',
            lamination: 'Матова',
            prices: {'5001-10000': 1.50,'1001-5000': 1.90,'501-1000': 2.30,'201-500': 3.00,'1-200': 3.80
            }
        }
    ];

    function getRange(units) {
        const n = Number(units);
        if (n >= 5001) return '5001-10000';
        if (n >= 1001) return '1001-5000';
        if (n >= 501) return '501-1000';
        if (n >= 201) return '201-500';
        if (n >= 100) return '100-200';
        return '1-200'; 
    }

    function getUnitPrice(units, format, print, lamination) {
        if (!units || isNaN(units)) return 0;
        const range = getRange(units);

        const baseProduct = priceData.find(item => item.format === format && item.print === print);
        const laminationProduct = laminationData.find(item => item.format === format && item.lamination === lamination);

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
        <div className='product-builder-flyer-page-container'>
            <ProductBuilderFlyerHeaderBar
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
            <ProductBuilderFlyerMainContent />
            <ProductBuilderFlyerFooterBar
                price={totalPrice}
                units={units}
                onUnitsChange={setUnits}
                lamination={lamination}
                setLamination={setLamination}
            />
        </div>
    );
}
