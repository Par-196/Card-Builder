import MainContentButton from '../../UI/Buttons/MainContentButton'
import './MainPageContent.css'
import CircularVideo from '../../UI/Buttons/CircularVideo'

export default function MainPageContent()
{
    return(
        <div className='contentBlock'>   
            <div className='leftContainer'>
                <div className='sloganBlock'>
                    <p className='slogan'>Друкуємо ідеї – створюємо шедеври</p>
                </div>
                <div className='mainPageButtonBlock'>
                    <div className='productButton'>
                        <MainContentButton>Каталог продукції</MainContentButton>
                    </div>
                    <div className='aboutUsButton'>
                        <MainContentButton>Інформація про нас</MainContentButton>
                    </div>
                </div>
            </div>
            <div className='rightContainer'>
                <div>
                    <CircularVideo />
                </div>
            </div>  
        </div>
    )
}