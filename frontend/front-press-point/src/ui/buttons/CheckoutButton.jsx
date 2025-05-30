import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function CheckoutButton(props) {

  const navigate = useNavigate();

  return (

    <Button 
    variant='contained'
    sx={{
        backgroundColor: '#242424',
        color: 'white',
        width: 580,
        height: 70,
        fontSize: 24,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'none',  
        boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.3)',
      }}
      onClick={() => navigate("/builder") }
      >{props.children}</Button>
  )
}
