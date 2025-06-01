import './OrdersList.css'
import OrderListDataGrid from '../../ui/dataGrid/orderListDataGrid'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrdersList()
{
    const [orders, setOrders] = useState([]);
    const apiUrl = 'https://localhost:7117';

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}/orders`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            } 
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <div className='orders-list-container'>
                <div className='orders-list-container-title'>
                    <p>Ваші замовлення</p>
                </div>
                <div className='order-list-box'>
                    <OrderListDataGrid orders={orders}/>
                </div>
            </div>
        </div>
    )
}