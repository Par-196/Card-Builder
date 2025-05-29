import './AccountRegistrationPage.css'
import RegistrationForm from '../../components/registrationForm/RegistrationForm.jsx'
import HomeButton from '../../ui/buttons/HomeButton.jsx'

export default function AccountRegistrationPage()
{
    return(
        <div className='account-registration-page-container'>
            <div className='account-registration-page-home-button'>
                <HomeButton>Головна</HomeButton>
            </div>
            <div className='account-registration-page-field-box'>
                <RegistrationForm />
            </div>
        </div>
    )
}