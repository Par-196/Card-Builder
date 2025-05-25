import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function EmailLoginTextField () 
{
  return(
    <TextField
      id="standard-suffix-shrink"
      label="Standard"
      variant="standard"
      sx={{
        width: 400,
        height: 23,
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
                opacity: 0,
                pointerEvents: 'none',
                color: 'white',
                [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                  opacity: 1,
                },
              }}
            >
              @gmail.com
            </InputAdornment>
          ),
        },
      }}
    />
  )
}
