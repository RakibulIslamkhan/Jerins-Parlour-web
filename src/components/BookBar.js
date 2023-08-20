import { AuthContext } from "@/context/userContext";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React, { useContext, useEffect, useState } from "react";
import {toast} from "react-hot-toast";
import ToastComponent from "./ToastComponent";


export default function BookBar() {
  const {user} = useContext(AuthContext);
  const [service, setService] = useState("");
  const [titles, setTitles] = useState([])
  const [paymentInfo, setPaymentInfo] = useState({name:user.displayName, email:user.email,});
  const handleChange = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newService = {...paymentInfo}
    newService[filed] = value;
    setService(value)
    setPaymentInfo(newService)
  };
  const handleSubmit = async (e) =>{
    e.preventDefault()
    handleInputBlur(e)
    fetch('https://hidden-beyond-00743-b937df4edd39.herokuapp.com/books',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(paymentInfo)
    })
    .then(res => res.json())
    .then(data => {
      toast.success('he')
      if (data.insertedId) {
        toast.success('Pay Complete');
      } else {
        toast.error('Failed to submit data');
      }
    })
    .catch(error => {
      toast.error('An error occurred');
      console.error(error);
    });
  }
  const handleInputBlur = (e) =>{
    const filed = e.target.name;
    const value = e.target.value;
    const newPayment = {...paymentInfo, status:'Pending'};
    newPayment[filed] = value;
    setPaymentInfo(newPayment)
  }
  useEffect(() => {
    fetch("https://hidden-beyond-00743-b937df4edd39.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setTitles(data));
  }, []);
  return (
    <div>
      <ToastComponent/>
      <Container maxWidth="lg" sx={{ my: 3 }}>
        <Box sx={{width: {xs:'100%',md:"400px"} }}>
          <Grid container>
            <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                value={user?.displayName}
                onBlur={handleInputBlur}
                name='name'
                required
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ my: 3 }}
                value={user?.email}
                onBlur={handleInputBlur}
                name='email'
                required
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" required>Services</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={service}
                  label="Services"
                  onChange={handleChange}
                  name='service'
                >
                  {
                    titles.map((title) => <MenuItem key={title._id} value={title.title}>{title.title}</MenuItem>)
                  }
                </Select>
              </FormControl>
              <FormControl sx={{mt:3}}>
                <FormLabel id="demo-row-radio-buttons-group-label" required>
                  Pay with
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  required
                >
                  <FormControlLabel
                    value="Credit Card"
                    control={<Radio />}
                    label="Credit Card"
                    name="payment"
                    onBlur={(e) => handleInputBlur(e)}
                  />
                  <FormControlLabel
                    value="Paypal"
                    control={<Radio />}
                    label="Paypal"
                    name='payment'
                    onBlur={(e) => handleInputBlur(e)}
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                type="number"
                fullWidth
                sx={{ my: 3 }}
                onBlur={(e) => handleInputBlur(e)}
                name='card_number'
                required
              />
              <Box sx={{ display: "flex", gap:3}}>
                <LocalizationProvider dateAdapter={AdapterMoment} required>
                  <DateField format="MM/YYYY" name='date' required onBlur={(e) => handleInputBlur(e)}/>
                </LocalizationProvider>
                <TextField
                  id="outlined-basic"
                  label="CVC"
                  variant="outlined"
                  type="number"
                  onBlur={(e) => handleInputBlur(e)}
                  name='cvc'
                  required
                />
              </Box>
              <Button
                variant="contained"
                sx={{ bgcolor: "#ff1493", mt: 3 }}
                fullWidth
                type="submit"
              >
                Pay
              </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
