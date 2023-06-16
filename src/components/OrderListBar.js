import { AuthContext } from "@/context/userContext";
import {
  Container,
  FormControl,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    border: "0",
    fontSize: 16,
    padding: "0px",
  },
}));

export default function OrderListBar() {
  const [age, setAge] = React.useState('');
  const [info, setInfo] = useState([])
  useEffect(()=>{
    fetch(`https://hidden-beyond-00743-b937df4edd39.herokuapp.com/books`)
    .then(res => res.json())
    .then(data => setInfo(data))
  },[])
  const handleChange = async(event, id) => {
    const status = event.target?.value;
    console.log(id)
    // setAge(value);
    await fetch(`https://hidden-beyond-00743-b937df4edd39.herokuapp.com/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: status }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Pay with</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.reverse().map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" width={'250px'}>
                  {row.email}
                </TableCell>
                <TableCell width={'150px'}>{row.name}</TableCell>
                <TableCell width={'250px'}>{row.service}</TableCell>
                <TableCell width={'150px'}>{row.payment}</TableCell>
                <TableCell width={"120px"}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={row.status}
                      onChange={(e) => handleChange(e , row._id)}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value={"Pending"}><span style={{color:"#FF4545"}}>Pending</span></MenuItem>
                      <MenuItem value={"Done"}><span style={{color:"#009444"}}>Done</span></MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
