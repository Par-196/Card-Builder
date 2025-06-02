import './ProductBuilderFlyerPage.css'
import ProductBuilderFlyerHeaderBar from '../../../components/productBuilderItems/productBuilderFlyer/productBuilderFlyerHeaderBar/ProductBuilderFlyerHeaderBar'
import ProductBuilderFlyerMainContent from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadMainContent/ProductBuilderNotepadMainContent'
import ProductBuilderFlyerFooterBar from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadFooterBar/ProductBuilderNotepadFooterBar'

export default function ProductBuilderFlyerPage()
{
    return(
        <div className='product-builder-flyer-page-container'>
                <ProductBuilderFlyerHeaderBar />
                <ProductBuilderFlyerMainContent />
                <ProductBuilderFlyerFooterBar />
        </div>
    )
}