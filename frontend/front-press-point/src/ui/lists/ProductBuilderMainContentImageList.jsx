import { FixedSizeList as List } from 'react-window';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

export default function ProductBuilderMainContentImageList({ images = [] }) {
  if (!images.length) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid black',
          color: '#888',
          fontSize: '16px',
          margin: '25px',
        }}
      >
        No images uploaded
      </Box>
    );
  }

  const Row = ({ index, style }) => (
    <ImageListItem
      style={{
        ...style,
        padding: '4px',
        boxSizing: 'border-box',
      }}
      key={index}
    >
      <img
        src={images[index].img}
        alt={images[index].title}
        loading="lazy"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      />
    </ImageListItem>
  );

  return (
    <List
      height={300}  
      itemCount={images.length}
      itemSize={200}  
      width={300} 
      style={{
      border: '1px solid black',
      borderRadius: '0px',
      overflowX: 'hidden',
    }}
    >
      {Row}
    </List>
  );
}