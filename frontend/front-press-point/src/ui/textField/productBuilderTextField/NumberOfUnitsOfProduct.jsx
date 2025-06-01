import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function NumberOfUnitsOfProduct({ onChange, value }) {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ '& > :not(style)': { m: 0 } }}>
      <Input
        placeholder="Введіть цифру"
        inputProps={ariaLabel}
        sx={{
          width: '200px',
          height: '50px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '20px',
          '&:before': { borderBottom: '1px solid gray' },
          '&:after': { borderBottom: '2px solid black' },
          '&:hover:not(.Mui-disabled):before': { borderBottom: '2px solid black' },
        }}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
