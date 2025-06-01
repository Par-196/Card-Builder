import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TotalPriceTextField({ price }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        variant="standard"
        value={price}
        InputProps={{ readOnly: true }}
        sx={{
          width: '200px',
          height: '50px',
          input: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '32px',
            height: '50px',
            padding: '0',
          },
          '& .MuiInput-underline:before': {
            borderBottom: '1px solid gray',
          },
          '& .MuiInput-underline:hover:before': {
            borderBottom: '2px solid black',
          },
          '& .MuiInput-underline:after': {
            borderBottom: '2px solid black',
          },
        }}
      />
    </Box>
  );
}
