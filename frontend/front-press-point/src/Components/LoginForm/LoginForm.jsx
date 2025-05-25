import LoginPassword from '../../UI/TextField/LoginTextField/LoginPassword.jsx'
import LoginEmail from '../../UI/TextField/LoginTextField/LoginEmail.jsx'
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx'
import './LoginForm.css'


export default function LoginForm()
{
    return (
        <div className='loginFormBody'>
            <div className='loginFormTitel'>
                <p>Вхід</p>
            </div>
            <div className='loginFormFieldContainer'>
                <div className='loginEmail'>
                    <LoginPassword />
                </div>
                <div className='LoginPassword'>
                    <LoginEmail />
                </div>
            </div>
            <div className='loginFormButtonContainer'> 
                <div className='loginFormFirstButton'>
                    <LoginAndRegistrationButton>Увійти</LoginAndRegistrationButton>
                </div>
                <div className='loginFormSecondButton'>
                    <LoginAndRegistrationButton>Реєстрація</LoginAndRegistrationButton>
                </div>
            </div>
        </div>
    )
}

