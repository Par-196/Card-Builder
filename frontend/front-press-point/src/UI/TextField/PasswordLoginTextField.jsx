import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginTextField() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: 400,
        height: 23,
        color: 'white',
        '& .MuiInputBase-root': {
          color: 'white',
          borderRadius: '4px',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white', // сірий, коли неактивний
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: 'white', // білий при наведенні
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white', // білий при фокусі
        },
        '& .MuiInputLabel-root': {
          color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'white',
        },
        // Білий колір іконки
        '& .MuiInputAdornment-root .MuiIconButton-root svg': {
          color: 'white',
        },
      }}
      variant="standard"
    >
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'hide the password' : 'display the password'}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
