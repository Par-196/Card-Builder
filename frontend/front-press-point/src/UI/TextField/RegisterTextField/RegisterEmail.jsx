import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function RegisterEmail ({ sx = {} }) 
{
  return(
    <TextField
      id="standard-suffix-shrink"
      label="Email"
      variant="standard"
      sx={{
        width: 480,
        height: 23,
        marginRight: 6,
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
      slotProps={{
        htmlInput: {
          sx: { textAlign: 'right' },
        },
        input: {
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                alignSelf: 'flex-end',
                margin: 0,
                marginBottom: '5px',
              }}
            >
              <span color='white'>@gmail.com</span>
            </InputAdornment>
          ),
        },
      }}
    />
  )
}
