import { Link, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React from "react";

export default function From() {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validatePassword = (newPassword) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(newPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain one uppercase letter, and one special character."
      );
    } else {
      setPasswordError("");
    }
  };
  const config = {
    SecureToken : "25a33161-ff08-4633-9095-bd7815c66ae3",
    To : 'rakibulislam4001@gnail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    if(window.Email){
      window.Email.send(config)
    }
    // const user = { email, displayName: firstName + " " + lastName };
    // createUser(email, password)
    //   .then((result) => {
    //     updateUserName(firstName, lastName);
    //     router.push("/");
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //     setOpen(true);
    //   });
    // fetch("https://hidden-beyond-00743-b937df4edd39.herokuapp.com/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <Box sx={{ bgcolor: "#FFF8F5", py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
          Let us handle your <br />
          project, professionally.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="number"
                type="number"
              />
            </Grid>
            <Grid item sm={12}>
            <TextField
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          multiline
          rows={4}
        />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
