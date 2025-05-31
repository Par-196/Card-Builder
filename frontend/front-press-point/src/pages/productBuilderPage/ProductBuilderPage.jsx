import ProductBuilderPostcardHeaderBar from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardHeaderBar/ProductBuilderPostcardHeaderBar.jsx';
import ProductBuilderPostcardMainContentLeftSide from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContentLeftSide/ProductBuilderPostcardMainContentLeftSide.jsx';

export default function ProductBuilderPage() {

    return (
        <div className='product-builder-postcard-container'>
            
            <ProductBuilderPostcardHeaderBar />

            <ProductBuilderPostcardMainContentLeftSide />
        </div>
    );
}
