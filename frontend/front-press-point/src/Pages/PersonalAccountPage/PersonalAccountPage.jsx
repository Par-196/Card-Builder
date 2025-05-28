import './PersonalAccountPage.css'
import PersonalAccountDataContainer from '../../Components/PersonalAccountDataContainer/PersonalAccountDataContainer.jsx'
import OrderStatuses from '../../Components/OrderStatuses/OrderStatuses.jsx'
import OrderList from '../../Components/OrdersList/OrdersList.jsx'

export default function PersonalAccountPage() 
{
    return (
        <div className='personal-account-components'>
            <div>
                <PersonalAccountDataContainer></PersonalAccountDataContainer>
            </div>
            <div>
                <OrderList></OrderList>
            </div>
            <div>
                <OrderStatuses></OrderStatuses>
            </div>
        </div>
    )
}