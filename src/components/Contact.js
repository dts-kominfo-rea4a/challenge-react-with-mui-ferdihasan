// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import { ListItem, List, ListItemAvatar, Typography, Divider, Box, Avatar } from '@mui/material';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
          <List sx={{display: 'flex', flexDirection: 'column',maxWidth: '500px', bgcolor: '#DBF6F0'}}> 
        {data.map(data => {
          return (<>
          <ListItem button alignItems="flex-start" sx={{display: 'flex', flexDirection: 'row', marginRadius: '5%', width: '450px'}}>
            <Box paddingRight="1em">
              <ListItemAvatar>
                <Avatar
                  sx={{width: 60, height: 60}}
                  src={data.photo}
                  alt={data.name}
                />
              </ListItemAvatar>
            </Box>
            <Box sx={{textAlign: 'start', display: 'flex', flexDirection: 'column'}}>
              <Typography>{data.name}</Typography>
              <Typography>{data.phone}</Typography>
              <Typography>{data.email}</Typography>
            </Box>
          </ListItem>
          <Divider/>
          </>
          )
        })}

        </List>
    </>);
};

export default Contact;
