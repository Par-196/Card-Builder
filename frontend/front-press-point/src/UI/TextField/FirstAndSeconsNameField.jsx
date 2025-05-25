import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextButton(props) {
  return (
    <Box>
      <TextField
        id="standard-basic"
        label={props.children}
        variant="standard"
        InputProps={{
          style: {
            color: 'white',
          },
        }}
        InputLabelProps={{
          style: {
            color: 'white',
          },
        }}
        sx={{
          '& .MuiInput-underline:before': { borderBottomColor: 'white' },
          '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' },
          '& .MuiInput-underline:after': { borderBottomColor: 'white' },
        }}
      />
    </Box>
  );
}
