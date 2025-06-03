import './ProductBuilderPostcardPage.css';
import ProductBuilderPostcardHeaderBar from '../../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardHeaderBar/ProductBuilderPostcardHeaderBar.jsx';
import ProductBuilderPostcardMainContent from '../../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContent/ProductBuilderPostcardMainContent.jsx';
import ProductBuilderPostcardFooterBar from '../../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardFooterBar/ProductBuilderPostcardFooterBar.jsx';
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductBuilderPostcardPage() {
  const [units, setUnits] = useState('');
  const [format, setFormat] = useState('A5');
  const [print, setPrint] = useState('Одностр');
  const [paperDensity, setPaperDensity] = useState('120 г/м²');
  const [lamination, setLamination] = useState('Матова');

  const location = useLocation();
  const selectedTitle = location.state || 'Листівка';

  const priceData = [
    { format: 'A5', print: 'Одностр', paperDensity: '120 г/м²', prices: { '501-1000': 6.8, '101-500': 12.4, '51-100': 19.9, '1-50': 75.3 } },
    { format: 'A5', print: 'Одностр', paperDensity: '160 г/м²', prices: { '501-1000': 7.5, '101-500': 13.5, '51-100': 21.4, '1-50': 83.7 } },
    { format: 'A5', print: 'Двостр', paperDensity: '120 г/м²', prices: { '501-1000': 13.6, '101-500': 19.8, '51-100': 32.1, '1-50': 128.9 } },
    { format: 'A5', print: 'Двостр', paperDensity: '160 г/м²', prices: { '501-1000': 14.4, '101-500': 21.3, '51-100': 34.5, '1-50': 134.2 } },
    { format: 'A6', print: 'Одностр', paperDensity: '120 г/м²', prices: { '501-1000': 4.5, '101-500': 9.8, '51-100': 14.3, '1-50': 60.5 } },
    { format: 'A6', print: 'Одностр', paperDensity: '160 г/м²', prices: { '501-1000': 5.2, '101-500': 11.2, '51-100': 16.0, '1-50': 65.9 } },
    { format: 'A6', print: 'Двостр', paperDensity: '120 г/м²', prices: { '501-1000': 7.1, '101-500': 14.8, '51-100': 22.9, '1-50': 103.4 } },
    { format: 'A6', print: 'Двостр', paperDensity: '160 г/м²', prices: { '501-1000': 7.9, '101-500': 16.2, '51-100': 25.3, '1-50': 109.8 } },
  ];

  const laminationData = [
    { format: 'A5', lamination: 'Глянцева', prices: { '501-1000': 0.7, '101-500': 1.0, '51-100': 1.6, '1-50': 4.0 } },
    { format: 'A5', lamination: 'Матова',   prices: { '501-1000': 0.8, '101-500': 1.2, '51-100': 1.8, '1-50': 4.5 } },
    { format: 'A6', lamination: 'Глянцева', prices: { '501-1000': 0.5, '101-500': 0.8, '51-100': 1.2, '1-50': 3.5 } },
    { format: 'A6', lamination: 'Матова',   prices: { '501-1000': 0.6, '101-500': 0.9, '51-100': 1.4, '1-50': 4.0 } },
  ];

  function getQuantityRange(units) {
    const n = Number(units);
    if (n >= 501) return '501-1000';
    if (n >= 101) return '101-500';
    if (n >= 51)  return '51-100';
    return '1-50';
  }

  function getUnitPrice(units, fmt, printType, paperDensity, laminationType) {
    const n = Number(units);
    if (!n || isNaN(n)) return 0;

    const range = getQuantityRange(n);

    const baseEntry = priceData.find(
      (item) =>
        item.format === fmt &&
        item.print === printType &&
        item.paperDensity === paperDensity
    );
    const lamEntry = laminationData.find(
      (item) =>
        item.format === fmt &&
        item.lamination === laminationType
    );

    if (!baseEntry || !lamEntry) return 0;

    const basePrice = baseEntry.prices[range] || 0;
    const lamPrice  = lamEntry.prices[range]  || 0;

    return basePrice + lamPrice;
  }

  function getTotalPrice(units, fmt, printType, paperDensity, laminationType) {
    const n = Number(units);
    if (!n || isNaN(n)) return 0;

    const unitPrice = getUnitPrice(n, fmt, printType, paperDensity, laminationType);
    return (unitPrice * n).toFixed(2);
  }

  const unitPrice = useMemo(
    () => getUnitPrice(units, format, print, paperDensity, lamination),
    [units, format, print, paperDensity, lamination]
  );

  const totalPrice = useMemo(() => {
    const n = Number(units);
    if (!n || isNaN(n)) return '0.00';
    return getTotalPrice(units, format, print, paperDensity, lamination);
  }, [unitPrice, units, format, print, paperDensity, lamination]);

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
      status: 'Processing',
      description: `Формат: ${orderData.format}, Друк: ${orderData.print}, Щільність: ${orderData.paperDensity}, Ламінація: ${orderData.lamination}`,
      amount: parseInt(orderData.quantity, 10),
      totalPrice: parseFloat(orderData.price),
    };

    try {
      const token = localStorage.getItem('token');
      const apiUrl = 'https://localhost:7117';
      const response = await axios.post(
        `${apiUrl}/orders`,
        orderPayload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Замовлення створено успішно!');
      console.log('Order response:', response);
    } catch (error) {
      console.error('Помилка при створенні замовлення:', error);
      alert('Помилка при створенні замовлення.');
    }
  };

  return (
    <div className='product-builder-postcard-container'>
      <div>
        <ProductBuilderPostcardHeaderBar
          format={format}
          setFormat={setFormat}
          print={print}
          setPrint={setPrint}
          orderData={{
            product: selectedTitle,
            format,
            print,
            paperDensity,
            lamination,
            quantity: units,
            price: totalPrice,
          }}
          onCreateOrder={handleCreateOrder}
        />
      </div>
      <div className='product-builder-postcard-main-content-box'>
        <ProductBuilderPostcardMainContent />
      </div>
      <div>
        <ProductBuilderPostcardFooterBar
          price={totalPrice}
          units={units}
          onUnitsChange={setUnits}
          paperDensity={paperDensity}
          setPaperDensity={setPaperDensity}
          lamination={lamination}
          setLamination={setLamination}
        />
      </div>
    </div>
  );
}
