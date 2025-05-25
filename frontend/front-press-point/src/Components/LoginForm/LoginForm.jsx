import LoginTextField from '../../UI/TextField/PasswordLoginTextField.jsx'
import EmailLoginTextField from '../../UI/TextField/EmailLoginTextField.jsx'
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx'
import './LoginForm.css'


export default function LoginForm()
{
    return (
        <div className='formBody'>
            <div className='formTitel'>
                <p>Вхід</p>
            </div>
            <div className='loginFormFieldContainer'>
                <div className='loginFormFirstFieldContainer'>
                    <LoginTextField />
                </div>
                <div className='loginFormSecondFieldContainer'>
                    <EmailLoginTextField />
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

