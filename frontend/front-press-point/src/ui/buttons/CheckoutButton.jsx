import Button from '@mui/material/Button'
import { useNavigate, useLocation } from 'react-router-dom'

export default function CheckoutButton({ children, selectedTitle }) {

  const product = [ 
    {title: "Листівка"},
    {title: "Буклет"},
    {title: "Блокнот"},
    {title: "Візитка"},
    {title: "Постер"},
    {title: "Бірка"},
    {title: "Конверт"},
    {title: "Флаєр"}
  ];
  
  const navigate = useNavigate();

  const location = useLocation();

  const title  = location.state;

  const selectedProduct = product.find(item => item.title === title);

  console.log(selectedProduct)

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
      
      onClick={() => navigate("/builder", { state: selectedProduct.title })}
    >
      {children}
    </Button>
  )
}
