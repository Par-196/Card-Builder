import './ProductBuilderPosterFooterBar.css'
import NumberOfUnitsOfProduct from '../../../../ui/textField/productBuilderTextField/NumberOfUnitsOfProduct.jsx'
import TotalPriceTextField from '../../../../ui/textField/productBuilderTextField/TotalPriceTextField.jsx'
import PosterLaminationButtons from '../../../../ui/buttons/productBuilderButtons/posterButtons/PosterLaminationButtons.jsx'

export default function ProductBuilderPosterFooterBar({ price, units, onUnitsChange, lamination, setLamination })
{
    const handleUnitsChange = (event) => {
    const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) {
        onUnitsChange(newValue); 
        }
    };
    return(
        <div className='product-builder-poster-footer-bar-container'>
            <div className='product-builder-poster-footer-bar-price-box'>
                <div className='product-builder-poster-footer-bar-price-box-title'>
                    <p>Ціна</p>
                </div>
                <div className='product-builder-poster-footer-bar-price-container'>
                    <div className='product-builder-poster-footer-bar-price-textField'>
                        <TotalPriceTextField price={price}/>
                    </div>
                    <div className='product-builder-poster-footer-bar-price-description'>
                        <p>ГРН</p>
                    </div>
                </div>
            </div>
            <div className='product-builder-poster-footer-bar-button-and-text-field-box'>
                <div className='product-builder-poster-footer-bar-text-field-box'>
                    <div className='product-builder-poster-footer-bar-text-field-title'>
                        <p>К-сть</p>
                    </div>
                    <div className='product-builder-poster-footer-bar-text-field'>
                        <NumberOfUnitsOfProduct value={units} onChange={handleUnitsChange}/>
                    </div>
                </div>
                <div className='product-builder-poster-footer-bar-button-lamination-box'>
                    <div className='product-builder-poster-footer-bar-button-lamination-title'>
                        <p>Ламінація</p>
                    </div>
                    <div className='product-builder-poster-footer-bar-button-lamination'>
                        <PosterLaminationButtons 
                        lamination={lamination}
                        setLamination={setLamination} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}