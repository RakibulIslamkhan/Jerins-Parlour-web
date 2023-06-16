import { Button, ButtonGroup, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AdminBar() {
    const[email, setEmail] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = {email}
        fetch('https://hidden-beyond-00743-b937df4edd39.herokuapp.com/users/admin', {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    const handleBlur = (e) =>{
        setEmail(e.target.value)
    }
  return (
    <Container maxWidth="lg">
        <form onSubmit={handleSubmit}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <TextField id="outlined-basic" label="Email" variant="outlined" onBlur={handleBlur}/>
        <Button type='submit' variant='contained'>Submit</Button>
    </ButtonGroup>
        </form>
    </Container>
  )
}
