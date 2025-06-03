import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function PosterLaminationButtons({lamination, setLamination}) {

  const handleClick = (label) => {
    setLamination(label);
  };

  return (
    <ButtonGroup
      color='black'
    >
      {['Матова', 'Глянцева'].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            width: 135,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            textTransform: 'none',
            backgroundColor: lamination === label ? '#ffffff' : '#242424',
            color: lamination === label ? '#000000' : '#ffffff',
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
