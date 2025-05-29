import MainContentButton from '../../ui/buttons/mainContentButton'
import './MainPageContent.css'
import CircularVideo from '../../ui/buttons/circularVideo'

export default function MainPageContent()
{
    return(
        <div className='main-page-content-block'>   
            <div className='main-page-left-container'>
                <div className='main-page-slogan-block'>
                    <p className='main-page-slogan'>Друкуємо ідеї – створюємо шедеври</p>
                </div>
                <div className='main-page-button-block'>
                    <div className='main-page-product-button'>
                        <MainContentButton>Каталог продукції</MainContentButton>
                    </div>
                    <div className='main-page-about-us-button'>
                        <MainContentButton>Інформація про нас</MainContentButton>
                    </div>
                </div>
            </div>
            <div className='main-page-right-container'>
                <div>
                    <CircularVideo />
                </div>
            </div>  
        </div>
    )
}