import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#ff1493", color: "#fff", pt: 6, pb: {xs:6,md:12} }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image src={"/map.png"} height={20} width={20} alt="map"/>
                <Typography sx={{ml:2}}>
                  H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                  Bangladesh
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <li>About</li>
                <li style={{marginTop:15}}>Project</li>
                <li style={{marginTop:15}}>Our Team</li>
                <li style={{marginTop:15}}>Terms Condition</li>
                <li style={{marginTop:15}}>Submit Listing</li>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <li>About</li>
                <li style={{marginTop:15}}>Project</li>
                <li style={{marginTop:15}}>Our Team</li>
                <li style={{marginTop:15}}>Terms Condition</li>
                <li style={{marginTop:15}}>Submit Listing</li>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  About Us
                </Typography>
                <Typography sx={{mb:3}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit rerum fugiat nemo laborum eveniet eaque velit
                  veritatis? Ipsa dolore omnis earum, consequatur deserunt
                  dolores dolorem officiis ratione aut, inventore obcaecati.
                </Typography>
                <Image src={"/fb.png"} height={20} width={20} style={{marginRight:15}} alt="facebook"/>
                <Image src={"/insta.png"} height={20} width={20} style={{marginRight:15}} alt="instagram"/>
                <Image src={"/link.png"} height={20} width={20} style={{marginRight:15}} alt="linkedin"/>
                <Image src={"/yt.png"} height={20} width={20} style={{marginRight:15}} alt="youtube"/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
