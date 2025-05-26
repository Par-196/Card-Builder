import './PersonalAccountPage.css'
import PersonalAccountDataContainer from '../../Components/PersonalAccountDataContainer/PersonalAccountDataContainer.jsx'
import OrderStatuses from '../../Components/OrderStatuses/OrderStatuses.jsx'

export default function PersonalAccountPage() 
{
    return (
        <div className='.personalAccountComponents'>
            <div>
                <PersonalAccountDataContainer></PersonalAccountDataContainer>
            </div>
            <div>
                <OrderStatuses></OrderStatuses>
            </div>
        </div>
    )
}