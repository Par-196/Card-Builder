import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ProductBuilderImageUploadButton({ onImageUpload }) {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const files = Array.from(event.target.files);
    const invalidFiles = files.filter(file => !file.type.startsWith('image/'));

    if (invalidFiles.length > 0) {
      setError(true);
      event.target.value = ''; 
      return;
    }

    onImageUpload(event.target.files);
  };

  const handleClose = () => {
    setError(false);
  };

  return (
    <>
      <Button
        sx={{
          width: '300px',
          height: '50px',
          backgroundColor: '#242424',
          color: 'white',
          boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.3)',
        }}
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={handleChange}
          multiple
        />
      </Button>
      
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please upload image files only!
        </Alert>
      </Snackbar>
    </>
  );
}
