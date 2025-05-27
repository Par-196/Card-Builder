import TextField from '@mui/material/TextField';
import { inputBaseClasses } from '@mui/material/InputBase';

export default function LoginEmail({ value, onChange }) {
  return (
    <TextField
      id="standard-suffix-shrink"
      label="Email"
      variant="standard"
      value={value}
      onChange={onChange}
      sx={{
        width: 400,
        height: 23,
        margin: 1,
        '& .MuiInputLabel-root': {
          color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        [`& .${inputBaseClasses.input}`]: {
          color: 'white',
          borderRadius: 1,
          paddingRight: '60px',
          backgroundColor: 'transparent',
        },
        '& input': {
          color: 'white',
          backgroundColor: 'transparent',
        },
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
          WebkitTextFillColor: 'white !important',
          backgroundColor: 'transparent !important',
          transition: 'background-color 9999s ease-in-out 0s',
        },
        '& .MuiInputAdornment-root': {
          color: 'white',
          opacity: 1,
          pointerEvents: 'auto',
          fontWeight: 600,
          fontSize: '1rem',
        },
      }}
    />
  );
}
