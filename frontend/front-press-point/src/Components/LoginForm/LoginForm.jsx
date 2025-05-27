import LoginPassword from '../../UI/TextField/LoginTextField/LoginPassword.jsx';
import LoginEmail from '../../UI/TextField/LoginTextField/LoginEmail.jsx';
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx';
import './LoginForm.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='loginFormBody'>
      <div className='loginFormTitel'>
        <p>Вхід</p>
      </div>
      <div className='loginFormFieldContainer'>
        <div className='LoginEmail'>
          <LoginEmail value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='loginPassword'>
          <LoginPassword value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='loginFormButtonContainer'>
        <div className='loginFormFirstButton'>
          <LoginAndRegistrationButton action="Увійти" data={{ email, password }} />
        </div>
        <div className='loginFormSecondButton'>
          <LoginAndRegistrationButton action="Реєстрація" data={{ email, password }} />
        </div>
      </div>
    </div>
  );
}
