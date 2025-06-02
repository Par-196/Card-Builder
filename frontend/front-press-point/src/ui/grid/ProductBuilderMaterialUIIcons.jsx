import { useState } from 'react';
import * as Icons from '@mui/icons-material';
import { Box, TextField } from '@mui/material';

export default function ProductBuilderMaterialUIIcons() {
  const [search, setSearch] = useState('');

  const initialIcons = [
    'Circle',
    'CircleOutlined',
    'Square',
    'CheckBoxOutlineBlank',
    'Hexagon',
    'HexagonOutlined',
    'Star',
    'StarBorder',
    'Favorite',
    'FavoriteBorder',
  ];

  const allIconNames = Object.keys(Icons);

  const filteredIcons = search
    ? allIconNames.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    : initialIcons;

  return (
    <Box sx={{ p: 2, width: '320px' }}>
      <TextField
        label="Пошук іконки"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'gray',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
              borderWidth: 2,
            },
          },
        }}
      />

      <Box
        sx={{
            height: '500px',
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            p: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
        }}
      >
        {filteredIcons.map((name) => {
          const IconComponent = Icons[name];
          if (!IconComponent) return null;

          return (
            <Box
              key={name}
              sx={{
                width: '120px',
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#f5f5f5' },
                border: '1px solid transparent',
              }}
            >
              <IconComponent fontSize="large" sx={{ fontSize: 64 }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}