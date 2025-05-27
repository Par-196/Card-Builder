import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
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
        },
        '& input': {
          color: 'white',
        },
        '& .MuiInputAdornment-root': {
          color: 'white',
          opacity: 1,
          pointerEvents: 'auto',
          fontWeight: 600,
          fontSize: '1rem',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ alignSelf: 'flex-end', margin: 0, marginBottom: '5px' }}>
            <span>@gmail.com</span>
          </InputAdornment>
        ),
      }}
    />
  );
}
