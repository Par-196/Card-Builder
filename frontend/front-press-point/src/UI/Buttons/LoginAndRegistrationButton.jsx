import Button from '@mui/material/Button';

export default function LoginAndRegistrationButton(props) {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          width: 400,
          height: 80,
          backgroundColor: 'rgba(24, 24, 24, 0.3)',
          borderColor: 'white',
          borderRadius: 2,
          color: 'rgba(146, 146, 146)',
          fontWeight: 800,
          fontSize: 40,
          fontFamily: "'JetBrains Mono', monospace",
          '&:hover': {
            backgroundColor: 'rgba(24, 24, 24, 0.7)',
            borderColor: 'white',
          },
        }}
      >
        {props.children}
      </Button>
    </div>
  );
}
