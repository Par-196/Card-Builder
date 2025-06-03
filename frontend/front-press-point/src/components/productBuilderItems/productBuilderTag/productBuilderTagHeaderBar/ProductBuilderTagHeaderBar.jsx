import "./ProductBuilderTagHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import TagFormatButtons from '../../../../ui/buttons/productBuilderButtons/tagButtons/TagFormatButtons.jsx'
import TagPrintingButtons from '../../../../ui/buttons/productBuilderButtons/tagButtons/TagPrintingButtons.jsx'
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'
import { useLocation } from 'react-router-dom';


export default function ProductBuilderTagHeaderBar( {format, setFormat, print, setPrint, orderData, onCreateOrder } )
{
    const location = useLocation();

    return (
        <div className='product-builder-tag-header-bar'>
            <div className='product-builder-tag-header-back-button-box'>
                <BackButton  />
            </div>
            <div className='product-builder-tag-header-buttons'>
                <div className="product-builder-tag-header-button-format-box">
                    <div className="product-builder-tag-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-tag-header-button-format">
                        <TagFormatButtons 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-tag-header-button-print-box">
                    <div className="product-builder-tag-header-button-format-title">
                        <p>Друк</p>
                    </div>
                    <div className="product-builder-tag-header-button-print">
                        <TagPrintingButtons
                        print={print}
                        setPrint={setPrint}
                         />
                    </div>
                </div>
                <div className="product-builder-tag-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}