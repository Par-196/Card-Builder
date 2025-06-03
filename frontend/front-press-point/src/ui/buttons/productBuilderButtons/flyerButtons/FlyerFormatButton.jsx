import Button from '@mui/material/Button';

export default function FlyerFormatButton({format, setFormat}) {

  const handleClick = () => {
    setFormat('Стандарт'); 
  };

  const isActive = format === 'Стандарт';

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        width: '270px',
        height: '50px',
        border: isActive ? '1px solid black' : 'none',
        borderRadius: '10px',
        color: isActive ? '#242424' : 'white',
        backgroundColor: isActive ? 'white' : '#242424',
        fontSize: '18px',
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'none',
      }}
    >
      Стандарт
    </Button>
  );
}
