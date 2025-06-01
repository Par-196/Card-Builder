import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MainContentLeftSideButtons({ statusButton, setStatusButton }) {
  const handleButtonClick = (buttonLabel) => {
    setStatusButton(buttonLabel);
  };

  return (
    <ButtonGroup
      aria-label="Basic button group"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiButtonGroup-grouped': {
          border: 'none',
          borderBottom: '1px solid black',
        },
        fontSize: '16px',
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {['Загрузка', 'Фігури', 'Текст'].map((buttonLabel) => (
        <Button
          key={buttonLabel}
          onClick={() => handleButtonClick(buttonLabel)}
          sx={{
            width: '100px',
            height: '99px',
            color: statusButton === buttonLabel ? 'white' : '#242424',
            backgroundColor: statusButton === buttonLabel ? '#242424' : 'transparent',
            borderRadius: '0px',
          }}
        >
          {buttonLabel}
        </Button>
      ))}
    </ButtonGroup>
  );
}
