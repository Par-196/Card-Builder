import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function PersonalAccountButton(props) {
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
        fontFamily: 'JetBrains Mono, monospace',
        textTransform: 'none',  
      }}
      >{props.children}</Button>
  )
}