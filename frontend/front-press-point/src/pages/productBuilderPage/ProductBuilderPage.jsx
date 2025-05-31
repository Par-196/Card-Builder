import './ProductBuilderPage.css'
import ProductBuilderPostcardHeaderBar from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardHeaderBar/ProductBuilderPostcardHeaderBar.jsx';
import ProductBuilderPostcardMainContentLeftSide from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContentLeftSide/productBuilderPostcardMainContentLeftSide.jsx';
import ProductBuilderPostcardMainContentRightSide from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContentRightSide/ProductBuilderPostcardMainContentRightSide.jsx';
import ProductBuilderPostcardFooterBar from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardFooterBar/ProductBuilderPostcardFooterBar.jsx';

export default function ProductBuilderPage() {

    return (
        <div className='product-builder-postcard-container'>
            <div>
                <ProductBuilderPostcardHeaderBar />
            </div>
            <div className='product-builder-postcard-main-content-box'>
                <ProductBuilderPostcardMainContentLeftSide />

                <ProductBuilderPostcardMainContentRightSide />
            </div>
            <div>
                <ProductBuilderPostcardFooterBar />
            </div>
        </div>
    );
}
