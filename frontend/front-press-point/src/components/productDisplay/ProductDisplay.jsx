import './ProductDisplay.css'
import Postcard from '../../assets/img/ProductСatalog/Postcard.jpg'
import Booklet from '../../assets/img/ProductСatalog/Booklet.jpg'
import Notebook from '../../assets/img/ProductСatalog/Notebook.jpg'
import BusinessCard from '../../assets/img/ProductСatalog/BusinessСard.jpg'
import Posters from '../../assets/img/ProductСatalog/Posters.jpg'
import Tag from '../../assets/img/ProductСatalog/Tag.jpg'
import Envelope from '../../assets/img/ProductСatalog/Envelope.jpg'
import Flyers from '../../assets/img/ProductСatalog/Flyers.jpg'
import CheckoutButton from '../../ui/buttons/CheckoutButton'
import { useLocation } from 'react-router-dom';

export default function ProductDisplay() {
    const product = [ 
        { 
        title: "Листівка", 
        image: Postcard, 
        shortDescription: "Листівка – невеликий аркуш із короткою інформацією чи рекламою. Використовується для акцій, запрошень, анонсів."
        },
        { 
        title: "Буклет", 
        image: Booklet, 
        shortDescription: "Буклет – складений аркуш, що містить структуровану інформацію. Використовується для презентації компаній, послуг, подій."
        },
        { 
        title: "Блокнот", 
        image: Notebook, 
        shortDescription: "Блокнот – зошит із фірмовим оформленням. Використовується для записів, корпоративних подарунків."
        },
        { 
        title: "Візитка", 
        image: BusinessCard, 
        shortDescription: "Візитка – маленька картка з контактною інформацією. Необхідна для ділових зустрічей та нетворкінгу."
        },
        { 
        title: "Постер", 
        image: Posters, 
        shortDescription: "Постер – велике зображення з текстом чи графікою. Використовується для реклами, декору або інформаційних цілей."
        },
        { 
        title: "Бірка", 
        image: Tag, 
        shortDescription: "Бірка – маленька картка з логотипом, ціною чи інформацією про товар. Використовується в магазинах, брендованій продукції."
        },
        { 
        title: "Конверт", 
        image: Envelope, 
        shortDescription: "Конверт – упаковка для документів чи листів із фірмовим стилем. Використовується для офіційного листування та маркетингу."
        },
        { 
        title: "Флаєр", 
        image: Flyers, 
        shortDescription: "Флаєр – рекламний матеріал невеликого розміру, що поширюється масово. Використовується для промоакцій, заходів та спеціальних пропозицій."
        }
    ];

    const location = useLocation();

    const selectedTitle  = location.state;

    const selectedProduct = product.find(item => item.title === selectedTitle);

    if (!selectedProduct) {
        return <p>Товар не вибрано</p>;
    }


    return (
    <div className='product-display-container'>
      <div className='product-display-image-box'>
        <img src={selectedProduct.image} alt={selectedProduct.title} className='product-display-image' />
      </div>
      <div className='product-display-text-and-button-box'>
        <p className='product-display-title'>{selectedProduct.title}</p>
        <p className='product-short-description'>{selectedProduct.shortDescription}</p>
        <div className='product-display-button-box'>
          <CheckoutButton>До конструктора</CheckoutButton>
        </div>
      </div>
    </div>
  )
}
