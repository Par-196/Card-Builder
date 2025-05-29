import LoginPassword from '../../ui/textField/loginTextField/loginPassword.jsx';
import LoginEmail from '../../ui/textField/loginTextField/loginEmail.jsx';
import LoginAndRegistrationButton from '../../ui/buttons/loginAndRegistrationButton.jsx';
import './LoginForm.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-form-body'>
      <div className='login-form-title'>
        <p>Вхід</p>
      </div>
      <div className='login-form-field-container'>
        <div className='login-email'>
          <LoginEmail value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='login-password'>
          <LoginPassword value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='login-form-button-container'>
        <div className='login-form-first-button'>
          <LoginAndRegistrationButton action="Увійти" data={{ email, password }} />
        </div>
        <div className='login-form-second-button'>
          <LoginAndRegistrationButton action="Реєстрація" data={{ email, password }} />
        </div>
      </div>
    </div>
  );
}
