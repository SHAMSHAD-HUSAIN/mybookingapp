import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  const [seats, setSeats] = useState()

  return (
    <Box display="flex" p={5} justifyContent="center">
      <Box >
        <Typography className='view-Stext' p={1} textAlign="center" variant='h5' >Welcome to Booking App! </Typography>

        <Card textAlign="center" sx={{ backgroundColor: "#1c4d4a" }}  >
          <Box
            height={100}
            width={500}
            mx={2}
            mt={3}
            //  display="flex"
            textAlign="center"
            alignItems="center"
          >
            <Box display="flex">
              <Typography width={250} variant='h6' mt={1} color="white">Enter no. of Seat </Typography>
              <input type='text' className='form-control ' value={seats} placeholder='Enter no of seat' onChange={(e) => setSeats(e.target.value)} />
            </Box>


          </Box>
          {
            seats > 0 ? <Box textAlign="center" pb={5}>
              <Link to="/book" state={{ seats: seats }} className='btn btn-primary' mt={5} pt={5}>Select Seats</Link>
            </Box> : <span></span>
          }



        </Card>
      </Box>


    </Box>
  )
}

export default Form
