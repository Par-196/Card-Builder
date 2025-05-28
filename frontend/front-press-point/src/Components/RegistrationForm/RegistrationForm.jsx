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
    <div className='registration-form-body'>
      <div className='registration-form-title'>
        <p>Реєстрація</p>
      </div>
      <div className='registration-form-field-container'>
        <div className='registration-name-container'>
          <div>
            <FirstAndLastNameField
              label="Ім'я"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <FirstAndLastNameField
              label="Прізвище"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='registration-email'>
          <RegisterEmail value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='registration-password'>
          <RegisterPassword value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='registration-form-button-container'>
        <div className='registration-form-first-button'>
          <LoginAndRegistrationButton
            action="Зареєструватися"
            data={{ firstName, lastName, email, password }}
          />
        </div>
      </div>
    </div>
  );
}
