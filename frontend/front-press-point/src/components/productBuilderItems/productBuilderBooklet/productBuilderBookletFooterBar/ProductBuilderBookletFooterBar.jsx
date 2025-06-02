import './ProductBuilderBookletFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'
import BookletLaminationButtons from '../../../../ui/buttons/productBuilderButtons/bookletButtons/BookletLaminationButtons.jsx';

export default function ProductBuilderBookletFooterBar({ price, units, onUnitsChange, lamination, setLamination })
{
    const handleUnitsChange = (event) => {
    const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) {
        onUnitsChange(newValue); 
        }
    };
    return(
        <div className='product-builder-booklet-footer-bar-container'>
            <div className='product-builder-booklet-footer-bar-price-box'>
                <div className='product-builder-booklet-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-booklet-footer-bar-price-container'>
                    <div className='product-builder-booklet-footer-bar-price-textField'>
                        <TotalPriceTextField price={price}/>
                    </div>
                    <div className='product-builder-booklet-footer-bar-price-description'>
                        <p>ГРН</p>
                    </div>
                </div>
            </div>
            <div className='product-builder-booklet-footer-bar-button-and-text-field-box'>
                <div className='product-builder-booklet-footer-bar-text-field-box'>
                    <div className='product-builder-booklet-footer-bar-text-field-title'>
                        <p>К-сть</p>
                    </div>
                    <div className='product-builder-booklet-footer-bar-text-field'>
                        <NumberOfUnitsOfProduct value={units} onChange={handleUnitsChange}/>
                    </div>
                </div>
                <div className='product-builder-booklet-footer-bar-button-paper-density-box'>
                    
                </div>
                <div className='product-builder-booklet-footer-bar-button-lamination-box'>
                    <div className='product-builder-booklet-footer-bar-button-lamination-title'>
                        <p>Ламінація</p>
                    </div>
                    <div className='product-builder-booklet-footer-bar-button-lamination'>
                        <BookletLaminationButtons 
                        lamination={lamination}
                        setLamination={setLamination} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}