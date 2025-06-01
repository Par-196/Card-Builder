import Button from '@mui/material/Button';

export default function ProductBuilderOrderButton({ orderData, onCreateOrder }) {
  const handleClick = () => {
    onCreateOrder(orderData);
  };
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        width: 270,
        height: 60,
        backgroundColor: '#242424',
        color: '#ffffff',
        borderRadius: '4px',
        boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.3)',
        fontSize: 18,
        fontWeight: 600,
        textTransform: 'none',
      }}
    >
      Замовити
    </Button>
  );
}
