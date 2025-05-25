import RegisterPassword from '../../UI/TextField/RegisterTextField/RegisterPassword.jsx'
import RegisterEmail from '../../UI/TextField/RegisterTextField/RegisterEmail.jsx'
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx'
import TextButton from '../../UI/TextField/FirstAndSeconsNameField.jsx'
import './RegistrationForm.css'


export default function RegistrationForm()
{
    return (
        <div className='registrationFormBody'>
            <div className='registrationFormTitel'>
                <p>Реєстрація</p>
            </div>
            <div className='registrationFormFieldContainer'>
                <div className='registrationNameContainer'>
                    <div className='registrationFirstName'>
                        <TextButton>Ім'я</TextButton>
                    </div>
                    <div className='registrationSecondName'>
                        <TextButton>Прізвище</TextButton>
                    </div>
                </div>
                <div className='registrationEmail'>
                    <RegisterEmail />
                </div>
                <div className='registrationPassword'>
                    <RegisterPassword />
                </div>
            </div>
            <div className='registrationFormButtonContainer'> 
                <div className='registrationFormFirstButton'>
                    <LoginAndRegistrationButton>Зареєструватися</LoginAndRegistrationButton>
                </div>
            </div>
        </div>
    )
}

