import './PersonalAccountDataContainer.css'
import FirstAndLastNameReadOnlyField from '../../UI/TextField/FirstAndLastNameReadOnlyField.jsx'


export default function PersonalAccountDataContainer()
{
    return(
        <div className='personalAccountNameBox'>
            <p className='personalAccountTitel'>Профіль</p>
            <div className='personalAccountFieldContainer'>
                <div className='personalAccountFirstNameBox'>
                    <p>Ім'я</p>
                    <FirstAndLastNameReadOnlyField>FirstName</FirstAndLastNameReadOnlyField>
                </div>
                <div className='personalAccountLastNameBox'>
                    <p>Прізвище</p>
                    <FirstAndLastNameReadOnlyField>LastName</FirstAndLastNameReadOnlyField>
                </div>  
                <div className='personalAccountEmail'>
                    <p>Пошта</p>
                    <FirstAndLastNameReadOnlyField>Email</FirstAndLastNameReadOnlyField>
                </div>     
            </div>
        </div>
    )
}

