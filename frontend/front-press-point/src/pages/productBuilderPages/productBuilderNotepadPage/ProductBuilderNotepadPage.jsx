import './ProductBuilderNotepadPage.css'
import ProductBuilderNotepadHeaderBar from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadHeaderBar/ProductBuilderNotepadHeaderBar.jsx';
import ProductBuilderNotepadMainContent from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadMainContent/ProductBuilderNotepadMainContent.jsx';
import ProductBuilderNotepadFooterBar from '../../../components/productBuilderItems/productBuilderNotepad/productBuilderNotepadFooterBar/ProductBuilderNotepadFooterBar.jsx';

export default function ProductBuilderNotepadPage()
{
    return(
        <div className='product-builder-notepad-page-container'>
            <ProductBuilderNotepadHeaderBar />
            <ProductBuilderNotepadMainContent />
            <ProductBuilderNotepadFooterBar />
        </div>
    )
}