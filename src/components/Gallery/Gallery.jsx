
// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';
import './gallery.css'
import Typography from '@mui/material/Typography'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <>
    <Typography variant="h5" color="inherit" textAlign={'center'}  id='gallery'
       sx={{
        margin : '5px',
        padding : '5px'
      }}
    >
          Gallery
    </Typography>
    <Box
        sx={{
          borderBottom : '3px solid white', 
          borderTop : '3px solid white', 
          margin : '10px',
          padding : '10px'
        }}
        className='image-container'>
      <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
      >
        {itemData.map((item, index) => (
            <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
        
    </Box>
    </>
  );
}

const itemData = [
  {
    img: './assets/Mehandi/mehndi001.jpeg',
    title: 'Breakfast',
    rows: 4,
    cols: 4,
  },
  {
    img: './assets/Mehandi/mehndi1.jpeg',
    title: 'Breakfast',
    rows: 4,
    cols: 4,
  },
  {
    img: './assets/Mehandi/mehndi2.jpeg',
    title: 'Burger',
  },
  {
    img: './assets/Mehandi/mehndi3.jpeg',
    title: 'Burger',
  },
  {
    img: './assets/Mehandi/mehndi4.jpeg',
    title: 'Camera',
  },
  {
    img: './assets/Mehandi/mehndi5.jpeg',
    title: 'Coffee',
  },
  {
    img: './assets/Mehandi/mehndi6.jpeg',
    title: 'Hats',
    cols: 2,
    rows : 2
  },
  {
    img: './assets/Mehandi/mehndi7.jpeg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './assets/Mehandi/mehndi8.jpeg',
    title: 'Basketball',
  },
  {
    img: './assets/Mehandi/mehndi9.jpeg',
    title: 'Fern',
  },
  {
    img: './assets/Mehandi/mehndi01.jpeg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './assets/Mehandi/mehndi02.jpeg',
    title: 'Burger',
  },
  {
    img: './assets/Mehandi/mehndi3.jpeg',
    title: 'Burger',
  },
  {
    img: './assets/Mehandi/mehndi04.jpeg',
    title: 'Camera',
  },
  {
    img: './assets/Mehandi/mehndi05.jpeg',
    title: 'Coffee',
    // cols: 2,
  },
  {
    img: './assets/Mehandi/mehndi06.jpeg',
    title: 'Hats',
    cols: 2,
    rows : 2,
  },
  {
    img: './assets/Mehandi/mehndi07.jpeg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './assets/Mehandi/mehndi08.jpeg',
    title: 'Basketball',
  },
  {
    img: './assets/Mehandi/mehndi09.jpeg',
    title: 'Fern',
  },
  {
    img: './assets/Mehandi/mehndi002.jpeg',
    title: 'Breakfast',
    rows: 4,
    cols: 4,
  },
];
