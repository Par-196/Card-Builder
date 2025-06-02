import './ProductBuilderEnvelopePage.css'
import ProductBuilderEnvelopeHeaderBar from '../../../components/productBuilderItems/productBuilderEnvelope/productBuilderEnvelopeHeaderBar/ProductBuilderEnvelopeHeaderBar'
import ProductBuilderEnvelopeMainContent from '../../../components/productBuilderItems/productBuilderEnvelope/productBuilderEnvelopeMainContent/ProductBuilderEnvelopeMainContent'
import ProductBuilderEnvelopeFooterBar from '../../../components/productBuilderItems/productBuilderEnvelope/productBuilderEnvelopeFooterBar/ProductBuilderEnvelopeFooterBar'

export default function ProductBuilderEnvelopePage()
{
    return(
        <div className='product-builder-envelope-page-container'>
            <ProductBuilderEnvelopeHeaderBar />
            <ProductBuilderEnvelopeMainContent />
            <ProductBuilderEnvelopeFooterBar />
        </div>
    )
}