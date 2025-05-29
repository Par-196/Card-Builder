import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function NavigationButtons(props) {

  const navigate = useNavigate();

  return (

    <Button 
    variant='contained'
    sx={{
        backgroundColor: 'white',
        color: 'black',
        width: 120,
        height: 50,
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'none',  
      }}
      onClick={() => navigate("/product", { state: props.children })}
      >{props.children}</Button>
  )
}

