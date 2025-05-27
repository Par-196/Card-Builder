import RegisterPassword from '../../UI/TextField/RegisterTextField/RegisterPassword.jsx';
import RegisterEmail from '../../UI/TextField/RegisterTextField/RegisterEmail.jsx';
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx';
import FirstAndLastNameField from '../../UI/TextField/FirstAndLastNameField.jsx';
import './RegistrationForm.css';
import { useState } from 'react';

export default function RegistrationForm() {
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
            <FirstAndLastNameField
              label="Ім'я"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='registrationSecondName'>
            <FirstAndLastNameField
              label="Прізвище"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='registrationEmail'>
          <RegisterEmail value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='registrationPassword'>
          <RegisterPassword value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='registrationFormButtonContainer'>
        <div className='registrationFormFirstButton'>
          <LoginAndRegistrationButton
            action="Зареєструватися"
            data={{ firstName, lastName, email, password }}
          />
        </div>
      </div>
    </div>
  );
}
