import LoginPassword from '../../UI/TextField/LoginTextField/LoginPassword.jsx'
import LoginEmail from '../../UI/TextField/LoginTextField/LoginEmail.jsx'
import LoginAndRegistrationButton from '../../UI/Buttons/LoginAndRegistrationButton.jsx'
import './LoginForm.css'
import { useState } from "react";
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function LoginForm()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='loginFormBody'>
            <div className='loginFormTitel'>
                <p>Вхід</p>
            </div>
            <div className='loginFormFieldContainer'>
                <div className='LoginEmail'>
                    <TextField
                          id="standard-suffix-shrink"
                          label="Email"
                          variant="standard"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          sx={{
                            width: 400,
                            height: 23,
                            margin: 1,
                            '& .MuiInputLabel-root': {
                              color: 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'white',
                            },
                            '& .MuiInput-underline:before': {
                              borderBottomColor: 'white',
                            },
                            '& .MuiInput-underline:hover:before': {
                              borderBottomColor: 'white',
                            },
                            '& .MuiInput-underline:after': {
                              borderBottomColor: 'white',
                            },
                            [`& .${inputBaseClasses.input}`]: {
                              color: 'white',      
                              borderRadius: 1,
                              paddingRight: '60px', 
                            },
                            '& input': {
                              color: 'white', 
                            },
                            '& .MuiInputAdornment-root': {
                              color: 'white',
                              opacity: 1,
                              pointerEvents: 'auto',
                              fontWeight: 600,
                              fontSize: '1rem',
                            },
                          }}>
                    </TextField>
                </div>
                <div className='loginPassword'>
                    <label htmlFor='password'>Пароль</label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Введіть пароль'
                    />
                    {/* <LoginPassword /> */}
                </div>
            </div>
            <div className='loginFormButtonContainer'> 
                <div className='loginFormFirstButton'>
                    <LoginAndRegistrationButton action="Увійти" data={{ email, password }}/>
                </div>
                <div className='loginFormSecondButton'>
                    <LoginAndRegistrationButton action="Реєстрація" data={{ email, password }}/>
                </div>
            </div>
        </div>
    )
}

