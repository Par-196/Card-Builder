import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function BookletFoldsButtons({folds, setFolds}) {

  const handleClick = (label) => {
    setFolds(label);
  };

  return (
    <ButtonGroup
      color='black'
    >
      {['Один', 'Два'].map((label) => (
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
            backgroundColor: folds === label ? '#ffffff' : '#242424',
            color: folds === label ? '#000000' : '#ffffff',
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
