import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Carousel from './Carousel'

export default function Testimonials() {
  return (
    <Box sx={{my:3}}>
        <Container maxWidth='lg'>
            <Typography variant='h4' fontWeight={'bold'} textAlign={'center'}>Testimonials</Typography>
            <Carousel/>
        </Container>
    </Box>
  )
}
