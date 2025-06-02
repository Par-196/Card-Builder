import './ProductBuilderTagPage.css'
import ProductBuilderTagHeaderBar from '../../../components/productBuilderItems/productBuilderTag/productBuilderTagHeaderBar/productBuilderTagHeaderBar' 
import ProductBuilderTagMainContent from '../../../components/productBuilderItems/productBuilderTag/productBuilderTagMainContent/productBuilderTagMainContent'
import ProductBuilderTagFooterBar from '../../../components/productBuilderItems/productBuilderTag/productBuilderTagFooterBar/ProductBuilderTagFooterBar'

export default function ProductBuilderTagPage()
{
    return(
        <div className='product-builder-tag-page-container'>
            <ProductBuilderTagHeaderBar />
            <ProductBuilderTagMainContent />
            <ProductBuilderTagFooterBar />
        </div>
    )
}