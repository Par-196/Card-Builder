import './OrdersList.css'
import OrderListDataGrid from '../../UI/DataGrid/OrderListDataGrid'

export default function OrdersList()
{
    return (
        <div>
            <div className='ordersListContainer'>
                <div className='ordersListContainerTitle'>
                    <p>Ваші замовлення</p>
                </div>
                <div className='orderListBox'>
                    <OrderListDataGrid></OrderListDataGrid>
                </div>
            </div>
        </div>
    )
}