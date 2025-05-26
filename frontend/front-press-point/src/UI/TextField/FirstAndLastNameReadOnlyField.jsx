import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FirstAndLastNameReadOnlyField(props) {
  return (
    <Box
      component="form"
      sx={{ 
        width: 380,
        height: 50,
      }}
      noValidate
      autoComplete="off"
      >
        <TextField
          id="standard-read-only-input"
          label={props.children}
          defaultValue={props.children}
          variant="standard"
          sx={{
            width: 300,
            height: 50,
          }} 
          slotProps={{
            input: {
              readOnly: true,
            },
          }} 
        />
      </Box>
  );
}