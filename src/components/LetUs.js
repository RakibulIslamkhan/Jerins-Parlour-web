import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import Image from 'next/image';
export default function LetUs() {
  return (
    <Box sx={{ bgcolor: "#FFF8F5", py: 6}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap:10
          }}
        >
          <Box>
            <Image src={"/engin.png"} height={300} width={500} alt="engin"/>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                pr: { md: 0 },
              }}
            >
              <Typography
                variant="h4"
                color="inherit"
                gutterBottom
                fontWeight={'bold'}
              >
                Let us handle your screen <span style={{color:'#ff1493'}}>Professionally.</span>
              </Typography>
              <Typography variant="body1" color="inherit" paragraph mb={8}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                vero est. Exercitationem, tenetur. Quaerat expedita officiis
                consectetur dolore, placeat aliquid vel quae minima itaque
                pariatur laudantium velit sequi tempore quasi?
              </Typography>
              <Box sx={{display:'flex',}}>
                <Box sx={{mr:10}}>
                  <Typography variant="h4" fontWeight={'bold'} sx={{color:'#ff1493',mb:1}}>500+</Typography>
                  <Typography>Happy Customers</Typography>
                </Box>
                <Box>
                <Typography variant="h4" fontWeight={'bold'} sx={{color:'#ff1493',mb:1}}>16+</Typography>
                  <Typography>Total Service</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
