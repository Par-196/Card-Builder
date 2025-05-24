import Button from '@mui/material/Button'

export default function PersonalAccountButton() {
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
        fontFamily: 'Inter, sans-serif',
        textTransform: 'none'
      }}>Особистий кабінет</Button>
  )
}