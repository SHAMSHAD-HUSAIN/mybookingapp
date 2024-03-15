import React from 'react'
import { Box, Typography } from '@mui/material'
import './App.css';

const BookCard = ({ source, selectclass, onClick }) => {
  // console.log("data",source,selectclass)
  return (

    <>
      <Box
        height={20}
        onClick={onClick}
        width={20}
        mx={1}
        mt={1}
        display="flex"
        textAlign="center"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
        className={selectclass ? "set-pink-color-selected" : source.IsBooked ? "set-blue-color" : "set-light-blue-color"}
      >
        {/* {props.source. seatId} */}
        <Typography variant='body' marginLeft={-1}>
          {source.seatId}
          {/* hi */}
        </Typography>
      </Box>
    </>

  )
}

export default BookCard;
