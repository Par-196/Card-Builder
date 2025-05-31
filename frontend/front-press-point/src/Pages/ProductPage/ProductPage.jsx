import './ProductPage.css'
import ProductNavigationMenu from '../../components/productNavigationMenu/ProductNavigationMenu.jsx'
import ProductDisplay from '../../components/productDisplay/ProductDisplay.jsx'
import ProductDescription from '../../components/productDescription/ProductDescription.jsx'
import ProductPrice from '../../components/productPrice/ProductPrice.jsx'
import ProductPostPressServices from '../../components/productPostPressServices/ProductPostPressServices.jsx'

export default function ProductPage() {
  
  return (
    <div className="product-page-container">
      <ProductNavigationMenu  />
      <ProductDisplay />
      <ProductDescription />
      <ProductPrice />
      <ProductPostPressServices />
    </div>
  )
}
