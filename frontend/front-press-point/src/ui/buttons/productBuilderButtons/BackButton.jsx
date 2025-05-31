import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BackButton({}) {
    
    const navigate = useNavigate();

    const location = useLocation();

    const title  = location.state;

    console.log(title)

    return (
        <Button
            variant="text"
            color='black'
            onClick={() => navigate('/product', { state: title })}
            sx={{
                borderRadius: '0px',
                width: '449px',
                height: '99px',
                fontSize: "30px",
            }}
        >
            Назад до каталогу
        </Button>
    );
}

