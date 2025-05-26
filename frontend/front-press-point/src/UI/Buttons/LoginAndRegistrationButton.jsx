import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function LoginAndRegistrationButton(props) {
  const navigate = useNavigate();
  const buttonText = props.children;

  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          width: 400,
          height: 80,
          backgroundColor: 'rgba(24, 24, 24, 0.3)',
          borderColor: 'white',
          borderRadius: 2,
          color: 'rgba(146, 146, 146)',
          fontWeight: 800,
          fontSize: 40,
          textTransform: 'none',
          fontFamily: "'JetBrains Mono', monospace",
          '&:hover': {
            backgroundColor: 'rgba(24, 24, 24, 0.7)',
            borderColor: 'white',
          },
        }}
        onClick={() => {
          if (buttonText === 'Увійти') {
            navigate('/personalaccountpage');
          } else if (buttonText === 'Реєстрація') {
            navigate('/accountregistrationpage');
          } else if (buttonText === 'Зареєструватися') {
            navigate('/accountloginpage');
          }
        }}
      >
        {props.children}
      </Button>
    </div>
  );
  };
