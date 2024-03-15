import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { seatsData } from './data';
import { Box, Grid, Button, Typography } from '@mui/material'
import BookCard from './seatcardfile';
import './App.css';

const Booking = (seats) => {

    // console.log(seatsData)
    const location = useLocation();
    const numSeats = location.state.seats;
    // console.log(numSeats)

    // console.log(availablSeat);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate = useNavigate();

    const selectSeat = (element, id) => {
        if (element.IsBooked) {
            console.log(" can not selected already booked")
        } else {

            console.log("selected")
        }
        // console.log(`  selected id:${element.IsBooked}`)
        //   console.log(`  selected id:${id}`)


    }

    const handleCardClick = (element) => {
        // console.log("seat",element)

        if (!element.IsBooked) {
            // setSelectedSeats(element.seatId);

            if (selectedSeats.includes(element.seatId)) {
                setSelectedSeats(selectedSeats.filter(id => id !== element.seatId));
            } else {
                if (selectedSeats.length < numSeats) {
                    setSelectedSeats([...selectedSeats, element.seatId]);
                }
            }
        }
    };
    const handleConfirm = () => {
        console.log("seats", selectedSeats)
        seatsData.map((ele) => {
            if (selectedSeats.includes(ele.seatId)) {
                // console.log("seat",ele.seatId)
                ele.IsBooked = true;
            }
        })
        navigate('/');
    }

    return (
        <Box mx={10} px={0} py={3} justifyContent='center'>
            <Typography className='view-Stext' p={1} textAlign="center" variant='h5' >view seats </Typography>

            <Box display="flex" justifyContent="space-between" width={600} ml="auto" mr="auto">
                <Typography className='view-Stext' textAlign="center" p={1} variant='h5' >Number of Seats: {numSeats - selectedSeats.length} </Typography>
                {
                    numSeats == selectedSeats.length ? <Button className='confirm-btn' onClick={handleConfirm} textAlign="center">     <Typography className='confirm-text' p={1} textAlign="center" variant='h6' >confirm </Typography> </Button> : <span></span>
                }
            </Box>



            <Box
                height="auto"
                width={600}
                ml="auto"
                mr="auto"
                p={1}
                sx={{ border: '1px solid black' }} >
                <Grid container >
                    {
                        seatsData.length &&
                        seatsData.map((ele) => {

                            return (
                                <>
                                    <Button onClick={() => selectSeat(ele, ele.seatId)} > <BookCard key={ele.seatId} source={ele} selectclass={selectedSeats.includes(ele.seatId)} onClick={() => handleCardClick(ele)} /></Button>

                                </>

                            )
                        })

                    }


                </Grid>

            </Box>
            <Box display="flex" justifyContent="center">
                <Typography className='view-Stext' p={1} textAlign="center" variant='body' >
                    Available seat :   <span className='available-seat-color'>lightblue</span>

                </Typography>

                <Typography className='view-Stext' p={1} textAlign="center" variant='body' >
                    Booked seat : <span className='booked-seat-color'>blue</span>

                </Typography>
                <Typography className='view-Stext' p={1} textAlign="center" variant='body' >
                    Selected seat : <span className='select-seat-color'>pink</span>

                </Typography>

            </Box>


        </Box>
    )
}

export default Booking;
