import "./productBuilderPostcardHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import PostcardFormatButtons from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardFormatButtons.jsx'
import PostcardPrintButton from '../../../../ui/buttons/productBuilderButtons/postcardButtons/PostcardPrintButton.jsx'
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'
import { useLocation } from 'react-router-dom';


export default function ProductBuilderPostcardHeaderBar(selectedTitle )
{
    const location = useLocation();

    return (
        <div className='product-builder-postcard-header-bar'>
            <div className='product-builder-postcard-header-back-button-box'>
                <BackButton selectedTitle={selectedTitle} />
            </div>
            <div className='product-builder-postcard-header-buttons'>
                <div className="product-builder-postcard-header-button-format-box">
                    <div className="product-builder-postcard-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-postcard-header-button-format">
                        <PostcardFormatButtons />
                    </div>
                </div>
                <div className="product-builder-postcard-header-button-print-box">
                    <div className="product-builder-postcard-header-button-format-title">
                        <p>Друк</p>
                    </div>
                    <div className="product-builder-postcard-header-button-print">
                        <PostcardPrintButton />
                    </div>
                </div>
                <div className="product-builder-postcard-header-buttons-builder-order">
                    <ProductBuilderOrderButton />
                </div>
            </div>
        </div>
    )
}