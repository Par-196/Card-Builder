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

    console.log(units);
    console.log(format);
    console.log(print);

    const price = useMemo(() => {
    if (!units || isNaN(units)) return 0;

    if (format === "A5" && print === "Одностр") {
        return units * 2;
    } else if (format === "A6" && print === "Двостр") {
        return units * 3;
    } else {
        return 0;
    }
    }, [format, units]);


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
            price={price}
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
