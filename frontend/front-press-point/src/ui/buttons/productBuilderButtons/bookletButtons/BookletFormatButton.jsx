import Button from '@mui/material/Button';

export default function BookletFormatButton({format, setFormat}) {

  const handleClick = () => {
    setFormat('A4'); 
  };

  const isActive = format === 'A4';

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        width: '200px',
        height: '50px',
        border: isActive ? '1px solid black' : 'none',
        borderRadius: '10px',
        color: isActive ? '#242424' : 'white',
        backgroundColor: isActive ? 'white' : '#242424',
        fontSize: '16px',
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      A4
    </Button>
  );
}
