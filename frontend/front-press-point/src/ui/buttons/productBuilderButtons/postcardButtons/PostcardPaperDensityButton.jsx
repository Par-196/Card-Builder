import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function PostcardPaperDensityButton() {
  const [selected, setSelected] = useState('One');

  const handleClick = (value) => {
    setSelected(value);
  };

  return (
    <ButtonGroup
      color='black'
    >
      {['120 г/м²', '160 г/м²'].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            width: 120,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: selected === label ? '#ffffff' : '#242424',
            
            color: selected === label ? '#000000' : '#ffffff',
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
