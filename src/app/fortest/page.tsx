"use client"
import HotelCard from "@/components/HotelCard"
import BookingCard from "@/components/BookingCard"
import BookingPanel from "@/components/BookingPanel"
import SearchPanel from "@/components/SearchPanel"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Image from "next/image"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PhotoPanel from "@/components/PhotoPanel"
import DatePicker from "@/components/DatePicker"
import Example from "@/components/DatePicker2"

export default function ForTest() {
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      rows: 1,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];

  const hotelImg = [
    '/img/pic1.jpg',
    '/img/pic1.jpg',
    '/img/pic1.jpg',
    '/img/pic1.jpg',
    '/img/pic1.jpg',
    '/img/pic1.jpg',
    'https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P',
  ]

  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-2">
      {/* <BookingCard HotelName="pic1" imgSrc='/img/pic1.jpg'/>
      <BookingPanel/> */}
      {/* <HotelCard HotelName="pic1" imgSrc='/img/pic1.jpg'/> */}
      {/* <SearchPanel/> */}
      
      {/* <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Image src={'/img/pic1.jpg'}
          alt={'pic1'}
          width={300}
          height={300}
          className='object-cover rounded-t-lg'/>
      </Backdrop> */}

      {/* <PhotoPanel imgList={hotelImg} /> */}

      <Example/>


    </main>
  )
}