import Button from '@mui/material/Button';

export default function NotepadRibbonButton({ ribbon, setRibbon }) {

  const handleClick = () => {
    setRibbon(prev => (prev === 'Стрічка' ? '' : 'Стрічка'));
  };

  const isActive = ribbon === 'Стрічка';

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
        fontSize: '16px',
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      Стрічка
    </Button>
  );
}
