import './Header.css'
import PersonalAccountButton from '../../UI/Buttons/PersonalAccountButton'

export default function Header () {
    return (
        <div className='header'>
        <p className='logo'>Press/Point</p>
        <div className='accountButton'>
            <PersonalAccountButton />
        </div>
    </div>
    )
}