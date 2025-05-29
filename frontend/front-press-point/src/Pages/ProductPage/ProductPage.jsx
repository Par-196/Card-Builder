import './ProductPage.css'
import { useLocation } from 'react-router-dom'

export default function ProductPage() {
  const location = useLocation()
  const item = location.state 

  if (!item) {
    return <div>Нічого не вибрано</div>
  }

  return (
    <div className="product-page-container">
      <h1 className="product-page-title">{item.title}</h1>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          width={400}
          className="product-page-image"
        />
      )}
    </div>
  )
}
