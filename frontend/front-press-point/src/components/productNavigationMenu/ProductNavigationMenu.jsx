import './ProductNavigationMenu.css'
import NavigationButtons from '../../ui/buttons/NavigationButtons'

export default function ProductNavigationMenu() 
{
    return(
        <div className='product-navigation-menu-container'>
            <NavigationButtons>Листівка</NavigationButtons>
            <NavigationButtons>Буклет</NavigationButtons>
            <NavigationButtons>Блокнот</NavigationButtons>
            <NavigationButtons>Візитка</NavigationButtons>
            <NavigationButtons>Постер</NavigationButtons>
            <NavigationButtons>Бірка</NavigationButtons>
            <NavigationButtons>Конверт</NavigationButtons>
            <NavigationButtons>Флаєр</NavigationButtons>
        </div>
    )
}