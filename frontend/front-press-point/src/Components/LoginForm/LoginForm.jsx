import LoginTextField from '../../UI/TextField/PasswordLoginTextField.jsx'
import EmailLoginTextField from '../../UI/TextField/EmailLoginTextField.jsx'
import './LoginForm.css'


export default function LoginForm()
{
    return (
        <div className='formBody'>
            <div>
                <LoginTextField />
            </div>
            <div>
                <EmailLoginTextField />
            </div>
        </div>
    )
}

