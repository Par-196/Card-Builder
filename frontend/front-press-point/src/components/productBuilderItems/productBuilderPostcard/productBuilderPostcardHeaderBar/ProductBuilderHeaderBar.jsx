import "./ProductBuilderHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import PostcardFormatButtons from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardFormatButtons.jsx'
import PostcardPrintButton from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardPrintButton.jsx'
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'


export default function ProductBuilderHeaderBar( {format, setFormat, print, setPrint, orderData, onCreateOrder } )
{

    return (
        <div className='product-builder-postcard-header-bar'>
            <div className='product-builder-postcard-header-back-button-box'>
                <BackButton  />
            </div>
            <div className='product-builder-postcard-header-buttons'>
                <div className="product-builder-postcard-header-button-format-box">
                    <div className="product-builder-postcard-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-postcard-header-button-format">
                        <PostcardFormatButtons 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-postcard-header-button-print-box">
                    <div className="product-builder-postcard-header-button-format-title">
                        <p>Друк</p>
                    </div>
                    <div className="product-builder-postcard-header-button-print">
                        <PostcardPrintButton
                        print={print}
                        setPrint={setPrint}
                         />
                    </div>
                </div>
                <div className="product-builder-postcard-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}