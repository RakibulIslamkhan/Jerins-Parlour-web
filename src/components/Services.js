import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function Services() {
  const [service, setService] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const handleExplore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
  };
  useEffect(() => {
    fetch("https://hidden-beyond-00743-b937df4edd39.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
          Our Awesome <span style={{ color: "#ff1493" }}>Services</span>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: {xs:'center',md:"space-between"}, mt: 8, flexWrap:'wrap', gap:4 }}>
          {service?.slice(0, visibleCards)?.map((data) => (
            <Card sx={{ maxWidth: 345, textAlign: "center", py:2 }} key={data._id}>
              <Image src={`data:image/png;base64,${data.image}`} height={60} width={60} alt="icon"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography>${data.price}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ textAlign: "center", mt:3 }} onClick={handleExplore}>
          <Button variant="contained">Explore more</Button>
        </Box>
      </Container>
    </div>
  );
}
