import './PersonalAccountDataContainer.css'
import FirstAndLastNameReadOnlyField from '../../ui/textField/firstAndLastNameReadOnlyField.jsx'


export default function PersonalAccountDataContainer()
{
    return(
        <div className='personal-account-name-box'>
            <p className='personal-account-title'>Профіль</p>
            <div className='personal-account-field-container'>
                <div className='personal-account-first-name-box'>
                    <p>Ім'я</p>
                    <FirstAndLastNameReadOnlyField>FirstName</FirstAndLastNameReadOnlyField>
                </div>
                <div className='personal-account-last-name-box'>
                    <p>Прізвище</p>
                    <FirstAndLastNameReadOnlyField>LastName</FirstAndLastNameReadOnlyField>
                </div>  
                <div className='personal-account-email'>
                    <p>Пошта</p>
                    <FirstAndLastNameReadOnlyField>Email</FirstAndLastNameReadOnlyField>
                </div>     
            </div>
        </div>
    )
}

