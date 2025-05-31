import './ProductBuilderPostcardFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'
import PostcardPaperDensityButton from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardPaperDensityButton.jsx'
import PostcardLaminationButton from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardLaminationButton.jsx'

export default function ProductBuilderPostcardFooterBar()
{
    return(
        <div className='product-builder-postcard-footer-bar-container'>
            <div className='product-builder-postcard-footer-bar-price-box'>
                <div className='product-builder-postcard-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-postcard-footer-bar-price-container'>
                    <div className='product-builder-postcard-footer-bar-price-textField'>
                        <TotalPriceTextField />
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
                        <NumberOfUnitsOfProduct />
                    </div>
                </div>
                <div className='product-builder-postcard-footer-bar-button-paper-density-box'>
                    <div className='product-builder-postcard-footer-bar-button-paper-density-title'>
                        <p>Щільність</p>
                    </div>
                    <div className='product-builder-postcard-footer-bar-button-paper-density'>
                        <PostcardPaperDensityButton />
                    </div>
                </div>
                <div className='product-builder-postcard-footer-bar-button-lamination-box'>
                    <div className='product-builder-postcard-footer-bar-button-lamination-title'>
                        <p>Ламінація</p>
                    </div>
                    <div className='product-builder-postcard-footer-bar-button-lamination'>
                        <PostcardLaminationButton />
                    </div>
                </div>
            </div>
        </div>
    )
}