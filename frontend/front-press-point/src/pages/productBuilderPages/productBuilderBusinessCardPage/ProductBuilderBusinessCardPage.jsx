import './ProductBuilderBusinessCardPage.css'
import ProductBuilderBusinessCardHeaderBar from '../../../components/productBuilderItems/productBuilderBusinessCard/productBuilderBusinessCardHeaderBar/ProductBuilderBusinessCardHeaderBar'
import ProductBuilderBusinessCardMainContent from '../../../components/productBuilderItems/productBuilderBusinessCard/productBuilderBusinessCardMainContent/ProductBuilderBusinessCardMainContent'
import ProductBuilderBusinessCardFooterBar from '../../../components/productBuilderItems/productBuilderBusinessCard/productBuilderBusinessCardFooterBar/ProductBuilderBusinessCardFooterBar'

export default function ProductBuilderBusinessCardPage()
{
    return(
        <div className='product-builder-business-card-page-container'>
            <ProductBuilderBusinessCardHeaderBar />
            <ProductBuilderBusinessCardMainContent />
            <ProductBuilderBusinessCardFooterBar />
        </div>
    )
}