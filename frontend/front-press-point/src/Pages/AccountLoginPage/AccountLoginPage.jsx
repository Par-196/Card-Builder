import './AccountLoginPage.css'
import LoginForm from '../../Components/LoginForm/LoginForm.jsx'
import HomeButton from '../../UI/Buttons/HomeButton.jsx'

export default function AccountLoginPage()
{
    return(
        <div className='account-login-page-container'>
            <div className='account-login-page-home-button'>
                <HomeButton>Назад</HomeButton>
            </div>
            <div className='account-login-page-login-form'>
                <LoginForm />
            </div>
        </div>
    )
}