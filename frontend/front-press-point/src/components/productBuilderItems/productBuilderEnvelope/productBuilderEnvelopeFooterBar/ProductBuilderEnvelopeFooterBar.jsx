import './ProductBuilderEnvelopeFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'

export default function ProductBuilderEnvelopeFooterBar({ price, units, onUnitsChange})
{
    const handleUnitsChange = (event) => {
    const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) {
        onUnitsChange(newValue); 
        }
    };
    return(
        <div className='product-builder-envelope-footer-bar-container'>
            <div className='product-builder-envelope-footer-bar-price-box'>
                <div className='product-builder-envelope-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-envelope-footer-bar-price-container'>
                    <div className='product-builder-envelope-footer-bar-price-textField'>
                        <TotalPriceTextField price={price}/>
                    </div>
                    <div className='product-builder-envelope-footer-bar-price-description'>
                        <p>ГРН</p>
                    </div>
                </div>
            </div>
            <div className='product-builder-envelope-footer-bar-button-and-text-field-box'>
                <div className='product-builder-envelope-footer-bar-text-field-box'>
                    <div className='product-builder-envelope-footer-bar-text-field-title'>
                        <p>К-сть</p>
                    </div>
                    <div className='product-builder-envelope-footer-bar-text-field'>
                        <NumberOfUnitsOfProduct value={units} onChange={handleUnitsChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}