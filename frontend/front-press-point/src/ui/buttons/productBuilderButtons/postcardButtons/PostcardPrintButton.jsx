import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function PostcardPrintButton({print, setPrint }) {
  const handleClick = (value) => {
    setPrint(value);
  };

  return (
    <ButtonGroup color='black'>
      {['Одностр', 'Двостр'].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            width: 167,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: print === label ? '#ffffff' : '#242424',
            color: print === label ? '#000000' : '#ffffff',
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
