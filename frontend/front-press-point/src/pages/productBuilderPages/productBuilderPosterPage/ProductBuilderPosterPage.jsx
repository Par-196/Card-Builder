import './ProductBuilderPosterPage.css'
import ProductBuilderPosterHeaderBar from '../../../components/productBuilderItems/productBuilderPoster/productBuilderPosterHeaderBar/ProductBuilderPosterHeaderBar'
import ProductBuilderPosterMainContent from '../../../components/productBuilderItems/productBuilderPoster/productBuilderPosterMainContent/ProductBuilderPosterMainContent'
import ProductBuilderPosterFooterBar from '../../../components/productBuilderItems/productBuilderPoster/productBuilderPosterFooterBar/ProductBuilderPosterFooterBar'

export default function ProductBuilderPosterPage()
{
    return(
        <div className='product-builder-poster-page-container'>
            <ProductBuilderPosterHeaderBar />
            <ProductBuilderPosterMainContent />
            <ProductBuilderPosterFooterBar />
        </div>
    )
}