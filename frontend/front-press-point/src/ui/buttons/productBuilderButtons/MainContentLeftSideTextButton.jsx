import Button from '@mui/material/Button'

export default function MainContentLeftSideTextButton({ onAddText }) {

  return (
    <Button 
      variant='contained'
      className="text-button"
      onClick={onAddText}
      sx={{
        backgroundColor: '#242424',
        color: 'white',
        width: 300,
        height: 60,
        fontSize: 20,
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'none',  
        boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.3)',
      }}
    >
    Додати текст
    </Button>
  )
}
