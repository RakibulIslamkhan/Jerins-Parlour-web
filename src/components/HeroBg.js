import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import Image from 'next/image';

function MainFeaturedPost() {
  return (
    <Box sx={{bgcolor:'#FFF8F5',pt:{xs:4, md:10}, pb:4}}>
    <Container maxWidth="lg" >
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',flexDirection:{xs:'column', md:'row'}, gap:{xs:6, md:0}}}>
        <Box>
          <Box
            sx={{
              position: 'relative',
              pr: { md: 0 },
              width:{xs:'100%',md:'80%'}
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom sx={{fontSize:{xs:"34px"}}}>
            BEAUTY SALON FOR EVERY WOMEN
            </Typography>
            <Typography variant="body1" color="inherit" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vero est. Exercitationem, tenetur. Quaerat expedita officiis consectetur dolore, placeat aliquid vel quae minima itaque pariatur laudantium velit sequi tempore quasi?
            </Typography>
            <Button variant='contained'>Get an Appointment</Button>
          </Box>
        </Box>
        <Box>
            <Image src={'/beautiful.png'} height={350} width={350} alt='beautiful'/>
        </Box>
      </Box>
    </Container>
    </Box>
  );
}
export default MainFeaturedPost;