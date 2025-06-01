import './ProductBuilderPage.css'
import ProductBuilderPostcardHeaderBar from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardHeaderBar/ProductBuilderPostcardHeaderBar.jsx';
import ProductBuilderPostcardMainContentLeftSide from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContentLeftSide/productBuilderPostcardMainContentLeftSide.jsx';
import ProductBuilderPostcardMainContentRightSide from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContentRightSide/ProductBuilderPostcardMainContentRightSide.jsx';
import ProductBuilderPostcardFooterBar from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardFooterBar/ProductBuilderPostcardFooterBar.jsx';
import React, { useState, useMemo } from 'react';

export default function ProductBuilderPage() {
    const [units, setUnits] = useState('');
    const [format, setFormat] = useState('A5');
    const [print, setPrint] = useState('Одностр');
    const [paperDensity, setPaperDensity] = useState('120 г/м²');
    const [lamination, setLamination] = useState("Матова");

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
        { format: 'A5', lamination: 'Матова', prices: { '501-1000': 0.8, '101-500': 1.2, '51-100': 1.8, '1-50': 4.5 } },
        { format: 'A6', lamination: 'Глянцева', prices: { '501-1000': 0.5, '101-500': 0.8, '51-100': 1.2, '1-50': 3.5 } },
        { format: 'A6', lamination: 'Матова', prices: { '501-1000': 0.6, '101-500': 0.9, '51-100': 1.4, '1-50': 4.0 } },
    ];

    function getUnitPrice(units, format, print, paperDensity, lamination) {
        if (!units || isNaN(units)) return 0;

        let range = '';
        if (units >= 501) range = '501-1000';
        else if (units >= 101) range = '101-500';
        else if (units >= 51) range = '51-100';
        else range = '1-50';

        const baseProduct = priceData.find(
            (item) => item.format === format && item.print === print && item.paperDensity === paperDensity
        );

        const laminationProduct = laminationData.find(
            (item) => item.format === format && item.lamination === lamination
        );

        if (!baseProduct || !laminationProduct) return 0;

        const basePrice = baseProduct.prices[range] || 0;
        const laminationPrice = laminationProduct.prices[range] || 0;

        return basePrice + laminationPrice;
    }

    
    const unitPrice = useMemo(() => getUnitPrice(Number(units), format, print, paperDensity, lamination), [units, format, print, paperDensity, lamination]);

   
    const totalPrice = useMemo(() => {
        if (!units || isNaN(units)) return 0;
        return (unitPrice * units).toFixed(2);
    }, [unitPrice, units]);



    
    return (
        <div className='product-builder-postcard-container'>
            <div>
                <ProductBuilderPostcardHeaderBar 
                    format={format}
                    setFormat={setFormat}
                    print={print}
                    setPrint={setPrint}
                />
            </div>
            <div className='product-builder-postcard-main-content-box'>
                <ProductBuilderPostcardMainContentLeftSide />
                <ProductBuilderPostcardMainContentRightSide />
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
