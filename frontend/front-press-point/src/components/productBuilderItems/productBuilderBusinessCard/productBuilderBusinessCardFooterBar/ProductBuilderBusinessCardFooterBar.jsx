import './ProductBuilderBusinessCardFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'
import BusinessCardLaminationButtons from '../../../../ui/buttons/productBuilderButtons/businessCardButtons/BusinessCardLaminationButtons.jsx'

export default function ProductBuilderBusinessCardFooterBar({ price, units, onUnitsChange, lamination, setLamination }) 
{
    const handleUnitsChange = (event) => {
        const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) {
            onUnitsChange(newValue);
        }
    };

    return (
        <div className='product-builder-business-card-footer-bar-container'>
            <div className='product-builder-business-card-footer-bar-price-box'>
                <div className='product-builder-business-card-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-business-card-footer-bar-price-container'>
                    <div className='product-builder-business-card-footer-bar-price-textField'>
                        <TotalPriceTextField price={price} />
                    </div>
                    <div className='product-builder-business-card-footer-bar-price-description'>
                        <p>ГРН</p>
                    </div>
                </div>
            </div>

            <div className='product-builder-business-card-footer-bar-button-and-text-field-box'>
                <div className='product-builder-business-card-footer-bar-text-field-box'>
                    <div className='product-builder-business-card-footer-bar-text-field-title'>
                        <p>К-сть</p>
                    </div>
                    <div className='product-builder-business-card-footer-bar-text-field'>
                        <NumberOfUnitsOfProduct value={units} onChange={handleUnitsChange} />
                    </div>
                </div>


                <div className='product-builder-business-card-footer-bar-button-lamination-box'>
                    <div className='product-builder-business-card-footer-bar-button-lamination-title'>
                        <p>Ламінація</p>
                    </div>
                    <div className='product-builder-business-card-footer-bar-button-lamination'>
                        <BusinessCardLaminationButtons
                            lamination={lamination}
                            setLamination={setLamination}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}