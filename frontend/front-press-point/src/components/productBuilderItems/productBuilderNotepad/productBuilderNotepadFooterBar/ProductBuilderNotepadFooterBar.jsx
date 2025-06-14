import './ProductBuilderNotepadFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'
import NotepadWireBindingButton from '../../../../ui/buttons/productBuilderButtons/notepadButtons/NotepadWireBindingButton.jsx'



export default function ProductBuilderNotepadFooterBar({ price, units, onUnitsChange, wireBinding, setWireBinding })
{
    const handleUnitsChange = (event) => {
    const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) {
        onUnitsChange(newValue); 
        }
    };
    return(
        <div className='product-builder-notepad-footer-bar-container'>
            <div className='product-builder-notepad-footer-bar-price-box'>
                <div className='product-builder-notepad-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-notepad-footer-bar-price-container'>
                    <div className='product-builder-notepad-footer-bar-price-textField'>
                        <TotalPriceTextField price={price}/>
                    </div>
                    <div className='product-builder-notepad-footer-bar-price-description'>
                        <p>ГРН</p>
                    </div>
                </div>
            </div>
            <div className='product-builder-notepad-footer-bar-button-and-text-field-box'>
                <div className='product-builder-notepad-footer-bar-text-field-box'>
                    <div className='product-builder-notepad-footer-bar-text-field-title'>
                        <p>К-сть</p>
                    </div>
                    <div className='product-builder-notepad-footer-bar-text-field'>
                        <NumberOfUnitsOfProduct value={units} onChange={handleUnitsChange}/>
                    </div>
                </div>
                <div className='product-builder-notepad-footer-bar-button-box'>
                    <div className='product-builder-notepad-footer-bar-button'>
                        <NotepadWireBindingButton 
                        wireBinding={wireBinding}
                        setWireBinding={setWireBinding}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}