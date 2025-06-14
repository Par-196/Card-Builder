import './ProductBuilderFlyerHeaderBar.css'
import BackButton from '../../../../ui/buttons/productBuilderButtons/BackButton.jsx'
import FlyerFormatButton from '../../../../ui/buttons/productBuilderButtons/flyerButtons/FlyerFormatButton.jsx'
import FlyerPrintButton from '../../../../ui/buttons/productBuilderButtons/flyerButtons/FlyerPrintButton.jsx'
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'
import { useLocation } from 'react-router-dom';


export default function ProductBuilderFlyerHeaderBar( {format, setFormat, print, setPrint, orderData, onCreateOrder } )
{
    const location = useLocation();

    return (
        <div className='product-builder-flyer-header-bar'>
            <div className='product-builder-flyer-header-back-button-box'>
                <BackButton  />
            </div>
            <div className='product-builder-flyer-header-buttons'>
                <div className="product-builder-flyer-header-button-format-box">
                    <div className="product-builder-flyer-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-flyer-header-button-format">
                        <FlyerFormatButton 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-flyer-header-button-print-box">
                    <div className="product-builder-flyer-header-button-format-title">
                        <p>Друк</p>
                    </div>
                    <div className="product-builder-flyer-header-button-print">
                        <FlyerPrintButton
                        print={print}
                        setPrint={setPrint}
                         />
                    </div>
                </div>
                <div className="product-builder-flyer-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}