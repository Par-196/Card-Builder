import { useLocation } from 'react-router-dom'
import ProductNavigationMenu from '../../components/productNavigationMenu/ProductNavigationMenu.jsx'
import './ProductPage.css'

export default function ProductPage() {
  const location = useLocation()
  const productTitle = location.state

  
  const selectedItem = arrayItems.find(item => item.title === productTitle)

  return (
    <div className="product-page-container">
      <ProductNavigationMenu selectedProduct={productTitle} />
      
      <div className='product-page-box'>
        {selectedItem ? (
          <div className='product-page-items'>
            <img src={selectedItem.image} alt={selectedItem.title} width={400} />
            <p>{selectedItem.title}</p>
            <p>{selectedItem.shortDescription}</p>
            <p>{selectedItem.description}</p>
          </div>
        ) : (
          <p>Продукт не знайдено.</p>
        )}
      </div>
    </div>
  )
}
