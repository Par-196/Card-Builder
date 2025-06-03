import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function NotepadFormatButton({format, setFormat}) {

  const handleClick = (label) => {
    setFormat(label);
  };

  return (
    <ButtonGroup
      color='black'
    >
      {['A4', 'A5', 'A6'].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            width: 80,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: format === label ? '#ffffff' : '#242424',
            color: format === label ? '#000000' : '#ffffff',
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
