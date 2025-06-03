import "./ProductBuilderEnvelopeHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import EnvelopeFormatButton from "../../../../ui/buttons/productBuilderButtons/envelopeButtons/envelopeFormatButton.jsx";
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'

export default function ProductBuilderEnvelopeHeaderBar( {format, setFormat, orderData, onCreateOrder } )
{
    return (
        <div className='product-builder-envelope-header-bar'>
            <div className='product-builder-envelope-header-back-button-box'>
                <BackButton  />
            </div>
            <div className='product-builder-envelope-header-buttons'>
                <div className="product-builder-envelope-header-button-format-box">
                    <div className="product-builder-envelope-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-envelope-header-button-format">
                        <EnvelopeFormatButton 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-envelope-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}