import './PersonalAccountDataContainer.css'
import FirstAndLastNameReadOnlyField from '../../UI/TextField/FirstAndLastNameReadOnlyField.jsx'


export default function PersonalAccountDataContainer()
{
    return(
        <div className='personalAccountNameBox'>
            <p className='personalAccountTitel'>Профіль</p>
            <div className='personalAccountFieldContainer'>
                <div className='firstNameBox'>
                    <p>Ім'я</p>
                    <FirstAndLastNameReadOnlyField>FirstName</FirstAndLastNameReadOnlyField>
                </div>
                <div className='lastNameBox'>
                    <p>Прізвище</p>
                    <FirstAndLastNameReadOnlyField>LastName</FirstAndLastNameReadOnlyField>
                </div>  
                <div className='email'>
                    <p>Пошта</p>
                    <FirstAndLastNameReadOnlyField>Email</FirstAndLastNameReadOnlyField>
                </div>     
            </div>
        </div>
    )
}

