import "./ProductBuilderPosterHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import PosterFormatButtons from "../../../../ui/buttons/productBuilderButtons/posterButtons/PosterFormatButtons.jsx";
import PosterPaperTypeButtons from '../../../../ui/buttons/productBuilderButtons/posterButtons/PosterPaperTypeButtons.jsx'

import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'
import { useLocation } from 'react-router-dom';


export default function ProductBuilderPosterHeaderBar( {format, setFormat, paperType, setPaperType, orderData, onCreateOrder } )
{
    const location = useLocation();

    return (
        <div className='product-builder-poster-header-bar'>
            <div className='product-builder-poster-header-back-button-box'>
                <BackButton  />
            </div>
            <div className='product-builder-poster-header-buttons'>
                <div className="product-builder-poster-header-button-format-box">
                    <div className="product-builder-poster-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-poster-header-button-format">
                        <PosterFormatButtons 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-poster-header-button-print-box">
                    <div className="product-builder-poster-header-button-format-title">
                        <p>Папір</p>
                    </div>
                    <div className="product-builder-poster-header-button-print">
                        <PosterPaperTypeButtons
                        paperType={paperType}
                        setPaperType={setPaperType}
                         />
                    </div>
                </div>
                <div className="product-builder-poster-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}