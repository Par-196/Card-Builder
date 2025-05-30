import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function HomeButton(props)
{
    const navigate = useNavigate()
    return (
        <div>
            <Button variant="outlined"
            sx={{
                width: '120px',
                height: '50px',
                color: 'white',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: 500,
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.86)',
                },
            }}
            onClick={() => navigate("/")}
            >{props.children}</Button>
        </div>
    )
}