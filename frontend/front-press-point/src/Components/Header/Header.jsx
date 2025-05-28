import './Header.css'
import PersonalAccountButton from '../../UI/Buttons/PersonalAccountButton'

export default function Header () {
    return (
        <div className='header'>
        <p className='header-logo'>Press/Point</p>
        <div className='header-account-button'>
            <PersonalAccountButton>Особистий кабінет</PersonalAccountButton>
        </div>
    </div>
    )
}
