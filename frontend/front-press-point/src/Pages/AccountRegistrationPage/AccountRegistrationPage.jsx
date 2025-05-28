import './AccountRegistrationPage.css'
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm.jsx'
import HomeButton from '../../UI/Buttons/HomeButton.jsx'

export default function AccountRegistrationPage()
{
    return(
        <div className='account-registration-page-container'>
            <div className='account-registration-page-home-button'>
                <HomeButton>Назад</HomeButton>
            </div>
            <div className='account-registration-page-field-box'>
                <RegistrationForm />
            </div>
        </div>
    )
}