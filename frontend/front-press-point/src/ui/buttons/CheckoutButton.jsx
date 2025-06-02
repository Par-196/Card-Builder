import Button from '@mui/material/Button'
import { useNavigate, useLocation } from 'react-router-dom'

export default function CheckoutButton({ children, selectedTitle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state;

  const productRoutes = {
    'Листівка': '/builder/postcardbuilder',
    'Буклет': '/builder/bookletbuilder',
    'Блокнот': '/builder/notepadbuilder',
    'Візитка': '/builder/businesscardbuilder',
    'Постер': '/builder/posterbuilder',
    'Бірка': '/builder/tagbuilder',
    'Конверт': '/builder/envelopebuilder',
    'Флаєр': '/builder/flyerbuilder',
  };

  const route = productRoutes[selectedTitle];

  return (
    <Button 
      variant='contained'
      sx={{
        backgroundColor: '#242424',
        color: 'white',
        width: 580,
        height: 70,
        fontSize: 24,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'none',  
        boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.3)',
      }}
      onClick={() => navigate(route, {state: selectedTitle})}
    >
      {children}
    </Button>
  )
}
