import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginAndRegistrationButton({ action, data}) {
  const navigate = useNavigate();
  const buttonText = action;
  const apiUrl = 'https://localhost:7117';

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
        onClick={async () => {
          if (buttonText === 'Увійти') {
            try {
              const response = await axios.post(`${apiUrl}/auth/login`, {
                email: data.email,
                password: data.password,
              });
              if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                navigate('/account');
              }
            } catch (error) {
              if (error.response) {
                console.error('Error data:', error.response.data);
              } else {
                console.error('Error:', error.message);
              }
            }
          } else if (buttonText === 'Реєстрація') {
            navigate('/registration');
          } else if (buttonText === 'Зареєструватися') {
            try {
              const response = await axios.post(`${apiUrl}/auth/register`, {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName
              });
              if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                navigate('/account');
              }
            } catch (error) {
              if (error.response) {
                console.error('Error data:', error.response.data);
              } else {
                console.error('Error:', error.message);
              }
            }
            navigate('/login');
          }
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
  };
