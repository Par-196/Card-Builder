import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import ProductBuilderBusinessCardHeaderBar from '../../../components/productBuilderItems/productBuilderBusinessCard/productBuilderBusinessCardHeaderBar/ProductBuilderBusinessCardHeaderBar.jsx';
import ProductBuilderBookletMainContent from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletMainContent/ProductBuilderBookletMainContent.jsx';
import ProductBuilderBusinessCardFooterBar from '../../../components/productBuilderItems/productBuilderBusinessCard/productBuilderBusinessCardFooterBar/ProductBuilderBusinessCardFooterBar.jsx';

export default function ProductBuilderBusinessCardPage() {
  const [units, setUnits] = useState('');
  const [format, setFormat] = useState('Стандартний');
  const [printType, setPrintType] = useState('Одностр');
  const [lamination, setLamination] = useState('Матова');

  const location = useLocation();
  const selectedTitle = location.state;

  const priceData = {
    'Стандартний': {
      'Одностр': { '5001-10000': 90, '1001-5000': 100, '501-1000': 115, '201-500': 145, '1-200': 180 },
      'Двостр':   { '5001-10000': 100, '1001-5000': 110.3, '501-1000': 125, '201-500': 155.8, '1-200': 190 }
    },
    'Євро': {
      'Одностр': { '5001-10000': 92, '1001-5000': 102, '501-1000': 117, '201-500': 147, '1-200': 182 },
      'Двостр':   { '5001-10000': 105, '1001-5000': 115, '501-1000': 130, '201-500': 160, '1-200': 195 }
    }
  };

  const laminationData = {
    'Стандартний': {
      'Матова':  { '5001-10000': 28, '1001-5000': 33, '501-1000': 39, '201-500': 48, '1-200': 60 },
      'Глянцева':{ '5001-10000': 26, '1001-5000': 30, '501-1000': 36, '201-500': 45, '1-200': 55 }
    },
    'Євро': {
      'Матова':  { '5001-10000': 30, '1001-5000': 35, '501-1000': 41, '201-500': 50, '1-200': 62 },
      'Глянцева':{ '5001-10000': 27, '1001-5000': 32, '501-1000': 38, '201-500': 46, '1-200': 57 }
    }
  };

  function getRange(units) {
    const n = Number(units);
    if (n >= 5001) return '5001-10000';
    if (n >= 1001) return '1001-5000';
    if (n >= 501) return '501-1000';
    if (n >= 201) return '201-500';
    return '1-200';
  }

  function getUnitPrice(units, format, printType, lamination) {
    if (!units || isNaN(units)) return 0;
    const range = getRange(units);

    const basePricesByFormat = priceData[format];
    if (!basePricesByFormat) return 0;

    const basePrice = basePricesByFormat[printType]?.[range] || 0;
    const laminationPricesByFormat = laminationData[format];
    if (!laminationPricesByFormat) return 0;

    const laminationPrice = laminationPricesByFormat[lamination]?.[range] || 0;

    return basePrice + laminationPrice;
  }

  const unitPrice = useMemo(() => getUnitPrice(Number(units), format, printType, lamination), [units, format, printType, lamination]);

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
      <ProductBuilderBusinessCardHeaderBar
        format={format}
        setFormat={setFormat}
        printType={printType}
        setPrintType={setPrintType}
        orderData={{
          product: selectedTitle,
          format,
          folds: printType, 
          lamination,
          quantity: units,
          price: totalPrice,
        }}
        onCreateOrder={handleCreateOrder}
      />
      <ProductBuilderBookletMainContent />
      <ProductBuilderBusinessCardFooterBar
        price={totalPrice}
        units={units}
        onUnitsChange={setUnits}
        lamination={lamination}
        setLamination={setLamination}
      />
    </div>
  );
}
