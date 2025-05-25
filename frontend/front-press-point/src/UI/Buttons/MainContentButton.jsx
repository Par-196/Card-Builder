import Button from '@mui/material/Button'

export default function MainContentButton(props) 
{
    return (
        <Button 
            variant='contained'
            sx={{
            backgroundColor: 'white',
            color: 'black',
            opacity: 0.6,
            width: 270,
            height: 70,
            fontSize: 20,
            fontWeight: 700,
            fontFamily: 'JetBrains Mono, monospace',
            textTransform: 'none',
            boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)',
        }}>
        {props.children}</Button>
    )
    
}