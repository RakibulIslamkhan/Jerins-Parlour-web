import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function ReviewBar() {
  const [review, setReview] = useState({});
  const handleInputBlur = e =>{
    const filed = e.target.name;
    const value = e.target.value;
    const newReview = {...review};
    newReview[filed] = value;
    setReview(newReview)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInputBlur(e);
    fetch("https://hidden-beyond-00743-b937df4edd39.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Box sx={{ width: {xs:'100%',md:"400px"} }}>
        <Grid container>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name='displayName'
                fullWidth
                onBlur={(e) => handleInputBlur(e)}
              />
              <TextField
                id="outlined-basic"
                label="Company’s name, Designation"
                name="title"
                variant="outlined"
                fullWidth
                sx={{ my: 3 }}
                onBlur={(e) => handleInputBlur(e)}
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={5}
                fullWidth
                name="description"
                onBlur={(e) => handleInputBlur(e)}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "#ff1493", mt: 3 }}
                fullWidth
                type="submit"
              >
                Review
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
