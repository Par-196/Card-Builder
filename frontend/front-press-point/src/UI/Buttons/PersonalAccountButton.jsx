import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import MainPage from '../../Pages/MainPage/MainPage'

export default function PersonalAccountButton(props) {

  const navigate = useNavigate();

  return (

    <Button 
    variant='contained'
    sx={{
        backgroundColor: 'white',
        color: 'black',
        width: 270,
        height: 70,
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'none',  
      }}
      onClick={() => navigate("/accountlogin") }
      >{props.children}</Button>
  )
}