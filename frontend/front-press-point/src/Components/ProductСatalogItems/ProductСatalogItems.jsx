import './ProductСatalogItems.css'
import Booklet from '../../assets/img/ProductСatalog/Booklet.jpg'
import BusinessCard from '../../assets/img/ProductСatalog/BusinessСard.jpg'
import Envelope from '../../assets/img/ProductСatalog/Envelope.jpg'
import Flyers from '../../assets/img/ProductСatalog/Flyers.jpg'
import Notebook from '../../assets/img/ProductСatalog/Notebook.jpg'
import Postcard from '../../assets/img/ProductСatalog/Postcard.jpg'
import Posters from '../../assets/img/ProductСatalog/Posters.jpg'
import Tag from '../../assets/img/ProductСatalog/Tag.jpg'
import { useNavigate } from 'react-router-dom'

export default function ProductCatalogItems() {
  const productCatalogItems = [
    { title: 'Листівка', image: Postcard },
    { title: 'Буклет', image: Booklet },
    { title: 'Блокноти', image: Notebook },
    { title: 'Візитки', image: BusinessCard },
    { title: 'Постери', image: Posters },
    { title: 'Бірки', image: Tag },
    { title: 'Конверти', image: Envelope },
    { title: 'Флаєри', image: Flyers },
  ]

  const navigate = useNavigate()

  return (
    <div className='product-catalog-items-container'>
        
        <div className='product-catalog-items-box'>
            {productCatalogItems.map((item, index) => (
            <div key={index} className='product-catalog-items'
            onClick={() => navigate('/product', {state: item.title}) }
            style={{ cursor: 'pointer' }}
            >
                <div className='product-catalog-items-image'>
                <img width={400} src={item.image} alt={item.title} />
                </div>
                <div className='product-catalog-items-title'>
                {item.title}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
