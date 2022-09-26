// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import { Box, TextField, Button } from "@mui/material";

const ContactForm = ({propsContactsSubmit}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada


    const [inputContact, setinputContact] = useState({
      name: '',
      phone: '',
      email: '',
      photo: '',
    });


    const localSubmit = (event) => {
      // console.log(inputContact);
      event.preventDefault();
      propsContactsSubmit(inputContact);
      setinputContact({
        name: '',
        phone: '',
        email: '',
        photo: '',
      });
    }


    return (
      <div style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
        <form onSubmit={localSubmit} style={{marginLeft: '7em'}}>
          <Box components="form" autoComplete="off" sx={{
            '& .MuiTextField-root': { width: 400, bgcolor: 'background.paper', marginBottom: 1 }, backgroundColor: '#E5E3DE', width: 400, padding: '1em', borderRadius: '1%'
          }}
          >
            <TextField value={inputContact.name} onChange={e => { setinputContact({...inputContact, name: e.target.value}) }} required id="name" label="Name" paddingBottom="1em"/>
            <TextField value={inputContact.phone} onChange={e => {setinputContact({...inputContact, phone: e.target.value})}} required id="phone" label="Phone"/>
            <TextField value={inputContact.email} onChange={e => {setinputContact({...inputContact, email: e.target.value})}} required id="email" label="Email"/>
            <TextField value={inputContact.photo} onChange={e => {setinputContact({...inputContact, photo: e.target.value})}} id="photo-url" label="URL Photo"/> <br/>
            <Button type="submit" variant="contained" color="success" sx={{display: 'flex', marginTop: 1.5}} >Tambah Contact</Button>
            </Box>
        </form>
      </div>
    );
}

export default ContactForm;