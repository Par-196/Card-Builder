import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FirstAndLastNameField({ label, value, onChange }) {
  return (
    <Box>
      <TextField
        id="standard-basic"
        label={label}
        variant="standard"
        value={value}
        onChange={onChange}
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
