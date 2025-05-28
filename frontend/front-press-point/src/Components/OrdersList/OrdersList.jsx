import './OrdersList.css'
import OrderListDataGrid from '../../UI/DataGrid/OrderListDataGrid'

export default function OrdersList()
{
    return (
        <div>
            <div className='orders-list-container'>
                <div className='orders-list-container-title'>
                    <p>Ваші замовлення</p>
                </div>
                <div className='order-list-box'>
                    <OrderListDataGrid></OrderListDataGrid>
                </div>
            </div>
        </div>
    )
}