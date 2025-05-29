import './AccountLoginPage.css'
import LoginForm from '../../components/loginForm/LoginForm.jsx'
import HomeButton from '../../ui/buttons/HomeButton.jsx'

export default function AccountLoginPage()
{
    return(
        <div className='account-login-page-container'>
            <div className='account-login-page-home-button'>
                <HomeButton>Головна</HomeButton>
            </div>
            <div className='account-login-page-login-form'>
                <LoginForm />
            </div>
        </div>
    )
}