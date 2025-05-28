import './Header.css'
import PersonalAccountButton from '../../UI/Buttons/PersonalAccountButton'
import { useNavigate } from 'react-router-dom'

export default function Header () {
    
    const navigate = useNavigate() 

    return (
        <div className='header'>
        <a onClick={() => (navigate('/'))}
        style={{ cursor: 'pointer' }}
        ><p className='header-logo' >Press/Point</p></a>
        <div className='header-account-button'>
            <PersonalAccountButton>Особистий кабінет</PersonalAccountButton>
        </div>
    </div>
    )
}
