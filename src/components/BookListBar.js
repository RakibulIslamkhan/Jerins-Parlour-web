import { AuthContext } from "@/context/userContext";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

export default function BookListBar() {
  const { info } = useContext(AuthContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", gap:2, flexWrap:'wrap', mx:2, }}>
      {info.length === 0 && <Box sx={{display:'flex', alignItems:'center'}}><Typography color='red' variant="h3">You Have No Book yet !</Typography></Box>}
      {info.map((card) => (
        <Card sx={{ maxWidth: 345, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src={"/face.png"} height={50} width={50} alt="face"/>
            <Typography
              sx={{
                bgcolor: card.status === 'Pending' ? "#FFE3E3" : "#C6FFE0",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                color: card.status === 'Pending' ? "#FF4545" : '#009444',
              }}
            >
              {card.status}
            </Typography>
          </Box>
          <CardContent sx={{p:"0 !important", py:'1rem !important'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{fontSize:{xs:'1.5rem'}}}>
              {card.service}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
