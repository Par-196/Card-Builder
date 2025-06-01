import './ProductBuilderPostcardFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'
import PostcardPaperDensityButton from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardPaperDensityButton.jsx'
import PostcardLaminationButton from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardLaminationButton.jsx'

export default function ProductBuilderPostcardFooterBar({ price, units, onUnitsChange, paperDensity, setPaperDensity, lamination, setLamination })
{
    const handleUnitsChange = (event) => {
    const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) {
        onUnitsChange(newValue); 
        }
    };
    console.log(price);
    return(
        <div className='product-builder-postcard-footer-bar-container'>
            <div className='product-builder-postcard-footer-bar-price-box'>
                <div className='product-builder-postcard-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-postcard-footer-bar-price-container'>
                    <div className='product-builder-postcard-footer-bar-price-textField'>
                        <TotalPriceTextField price={price}/>
                    </div>
                    <div className='product-builder-postcard-footer-bar-price-description'>
                        <p>ГРН</p>
                    </div>
                </div>
            </div>
            <div className='product-builder-postcard-footer-bar-button-and-text-field-box'>

                <div className='product-builder-postcard-footer-bar-text-field-box'>
                    <div className='product-builder-postcard-footer-bar-text-field-title'>
                        <p>К-сть</p>
                    </div>
                    <div className='product-builder-postcard-footer-bar-text-field'>
                        <NumberOfUnitsOfProduct value={units} onChange={handleUnitsChange}/>
                    </div>
                </div>

                <div className='product-builder-postcard-footer-bar-button-paper-density-box'>
                    <div className='product-builder-postcard-footer-bar-button-paper-density-title'>
                        <p>Щільність</p>
                    </div>
                    <div className='product-builder-postcard-footer-bar-button-paper-density'>
                        <PostcardPaperDensityButton
                        paperDensity={paperDensity}
                        setPaperDensity={setPaperDensity}
                        />
                    </div>
                </div>
                <div className='product-builder-postcard-footer-bar-button-lamination-box'>
                    <div className='product-builder-postcard-footer-bar-button-lamination-title'>
                        <p>Ламінація</p>
                    </div>
                    <div className='product-builder-postcard-footer-bar-button-lamination'>
                        <PostcardLaminationButton 
                        lamination={lamination}
                        setLamination={setLamination} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}