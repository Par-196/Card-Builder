import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function PosterPaperTypeButtons({paperType, setPaperType}) {

  const handleClick = (label) => {
    setPaperType(label);
  };

  return (
    <ButtonGroup
      color='black'
    >
      {['Крейдований', 'Фотопапір'].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            width: 150,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'none',
            border: '1px solid black',
            borderRadius: '10px',
                textTransform: 'none',
            backgroundColor: paperType === label ? '#ffffff' : '#242424',
            color: paperType === label ? '#000000' : '#ffffff',
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
