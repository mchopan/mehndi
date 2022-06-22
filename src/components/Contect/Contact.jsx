import React from "react";
import "./contact.css";
import { Box, TextareaAutosize, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { dark } from "@mui/material/styles/createPalette";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent : 'center',      
        padding : '10px'
      }}
      id='contacts'
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin : '20px',
          gap : '10px'
        }}
        maxWidth="xs"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <a href="#">
            <img src="./assets/whatsapp.png" alt="whatsapp" />
          </a>
          <a href="#">
            <img src="./assets/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="./assets/instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="./assets/snapchat.png" alt="snapchat" />
          </a>
        </Box>
        <Box
          className="form-field"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextareaAutosize
            p={1}
            m={2}
            aria-label="minimum height"
            minRows={5}
            style={{ width: 250, backgroundColor:'black', color: 'white', padding:'5px'}}
            placeholder="your message here"
          />
          <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
