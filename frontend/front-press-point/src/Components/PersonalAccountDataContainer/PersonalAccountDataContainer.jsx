import './PersonalAccountDataContainer.css'
import FirstAndLastNameReadOnlyField from '../../ui/textField/firstAndLastNameReadOnlyField.jsx'


export default function PersonalAccountDataContainer({ user })
{
    if (!user) {
        return <div>Loading user data...</div>;
    }
    
    return(
        <div className='personal-account-name-box'>
            <p className='personal-account-title'>Профіль</p>
            <div className='personal-account-field-container'>
                <div className='personal-account-first-name-box'>
                    <p>Ім'я</p>
                    <FirstAndLastNameReadOnlyField>{user.firstName || '—'}</FirstAndLastNameReadOnlyField>
                </div>
                <div className='personal-account-last-name-box'>
                    <p>Прізвище</p>
                    <FirstAndLastNameReadOnlyField>{user.lastName || '—'}</FirstAndLastNameReadOnlyField>
                </div>  
                <div className='personal-account-email'>
                    <p>Пошта</p>
                    <FirstAndLastNameReadOnlyField>{user.email || '—'}</FirstAndLastNameReadOnlyField>
                </div>     
            </div>
        </div>
    )
}

