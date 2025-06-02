import ProductBuilderHeaderBar from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardHeaderBar/ProductBuilderHeaderBar'
import ProductBuilderMainContent from '../../components/productBuilderItems/productBuilderPostcard/productBuilderPostcardMainContent/ProductBuilderMainContent'
import ProductBuilderFooterBar from '../../components/productBuilderItems/productBuilderFooterBar/ProductBuilderFooterBar'
import './ProductBuilderLayout.css'
import {Outlet} from 'react-router-dom'


export default function ProductBuilderLayout()
{
    return(
        <div>
            <ProductBuilderHeaderBar />
            <ProductBuilderMainContent />
            <ProductBuilderFooterBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
