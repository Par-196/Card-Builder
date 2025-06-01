import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function BackButton({}) {
    
    const navigate = useNavigate();

    return (
        <Button
            variant="text"
            color='black'
            onClick={() => navigate('/catalog')}
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

