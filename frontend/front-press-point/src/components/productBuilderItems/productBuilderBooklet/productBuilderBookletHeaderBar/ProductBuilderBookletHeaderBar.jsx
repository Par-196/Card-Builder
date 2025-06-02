import "./ProductBuilderBookletHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import BookletFormatButton from "../../../../ui/buttons/productBuilderButtons/bookletButtons/BookletFormatButton.jsx"
import BookletFoldsButtons from "../../../../ui/buttons/productBuilderButtons/bookletButtons/BookletFoldsButtons.jsx"
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'
import { useLocation } from 'react-router-dom';


export default function ProductBuilderBookletHeaderBar( {format, setFormat, folds, setFolds, orderData, onCreateOrder } )
{
    const location = useLocation();

    return (
        <div className='product-builder-booklet-header-bar'>
            <div className='product-builder-booklet-header-back-button-box'>
                <BackButton  />
            </div>
            <div className='product-builder-booklet-header-buttons'>
                <div className="product-builder-booklet-header-button-format-box">
                    <div className="product-builder-booklet-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-booklet-header-button-format">
                        <BookletFormatButton 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-booklet-header-button-print-box">
                    <div className="product-builder-booklet-header-button-format-title">
                        <p>Згини</p>
                    </div>
                    <div className="product-builder-booklet-header-button-print">
                        <BookletFoldsButtons
                        folds={folds}
                        setFolds={setFolds}
                         />
                    </div>
                </div>
                <div className="product-builder-booklet-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}