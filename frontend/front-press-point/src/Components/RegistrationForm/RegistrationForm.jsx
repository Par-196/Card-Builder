import RegisterPassword from '../../UI/TextField/RegisterTextField/RegisterPassword.jsx'
import RegisterEmail from '../../UI/TextField/RegisterTextField/RegisterEmail.jsx'
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx'
import FirstAndLastNameField from '../../UI/TextField/FirstAndLastNameField.jsx'
import './RegistrationForm.css'
import { useState } from "react";

export default function RegistrationForm()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className='registrationFormBody'>
            <div className='registrationFormTitel'>
                <p>Реєстрація</p>
            </div>
            <div className='registrationFormFieldContainer'>
                <div className='registrationNameContainer'>
                    <div className='registrationFirstName'>
                        <label htmlFor="firstName">Ім'я</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Введіть ім'я"
                        />
                        {/* <FirstAndLastNameField>Ім'я</FirstAndLastNameField> */}
                    </div>
                    <div className='registrationSecondName'>
                        <label htmlFor="lastName">Прізвище</label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Введіть прізвище"
                        />
                        {/* <FirstAndLastNameField>Прізвище</FirstAndLastNameField> */}
                    </div>
                </div>
                <div className='registrationEmail'>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                    />
                    {/* <RegisterEmail /> */}
                </div>
                <div className='registrationPassword'>
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введіть пароль"
                    />
                    {/* <RegisterPassword /> */}
                </div>
            </div>
            <div className='registrationFormButtonContainer'> 
                <div className='registrationFormFirstButton'>
                    <LoginAndRegistrationButton action="Зареєструватися" data={{ firstName, lastName, email, password }}/>
                </div>  
            </div>
        </div>
    )
}

