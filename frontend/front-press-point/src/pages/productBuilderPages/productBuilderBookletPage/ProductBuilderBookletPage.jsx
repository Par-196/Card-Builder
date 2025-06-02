import './ProductBuilderBookletPage.css'
import ProductBuilderBookletCardHeaderBar from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletHeaderBar/ProductBuilderBookletHeaderBar.jsx'
import ProductBuilderBookletMainContent from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletMainContent/ProductBuilderBookletMainContent.jsx'
import ProductBuilderBookletFooterBar from '../../../components/productBuilderItems/productBuilderBooklet/productBuilderBookletFooterBar/ProductBuilderBookletFooterBar.jsx'

export default function ProductBuilderBookletPage()
{
    return(
        <div className='product-builder-booklet-page-container'>
            <ProductBuilderBookletCardHeaderBar />
            <ProductBuilderBookletMainContent />
            <ProductBuilderBookletFooterBar />
        </div>
    )
}