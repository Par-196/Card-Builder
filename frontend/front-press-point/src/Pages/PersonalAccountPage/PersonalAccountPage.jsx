import './PersonalAccountPage.css'
import PersonalAccountDataContainer from '../../components/personalAccountDataContainer/PersonalAccountDataContainer.jsx'
import OrderStatuses from '../../components/orderStatuses/OrderStatuses.jsx'
import OrderList from '../../components/ordersList/OrdersList.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PersonalAccountPage() 
{
    const [user, setUser] = useState(null);
    const apiUrl = 'https://localhost:7117';
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiUrl}/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response)
                setUser(response.data);
            } catch (err) {
                console.error('Помилка при отриманні користувача:', err);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className='personal-account-components'>
            <div>
                <PersonalAccountDataContainer user={user}/>
            </div>
            <div>
                <OrderList />
            </div>
            <div>
                <OrderStatuses></OrderStatuses>
            </div>
        </div>
    )
}