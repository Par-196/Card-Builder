import './PersonalAccountPage.css'
import PersonalAccountDataContainer from '../../components/personalAccountDataContainer/PersonalAccountDataContainer.jsx'
import OrderStatuses from '../../components/orderStatuses/OrderStatuses.jsx'
import OrderList from '../../components/ordersList/OrdersList.jsx'

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