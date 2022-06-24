import React from "react";
import "./contact.css";
import { Box, TextareaAutosize, TextField, Button,} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/node/styles";
// import { makeStyle } from '@mui/styles'


// const useStyles = makeStyles({
//   input: {
//     color: "white"
//   }
// });

const Contact = () => {
  // const classes = useStyles();

  return (
    <>
       <Typography variant="h5" color="inherit" textAlign={'center'}  id='gallery'
       sx={{
        margin : '5px',
        padding : 'px'
      }}
    >
      Contact Me
      </Typography>
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
          <a href="https://web.whatsapp.com">
            <img src="./assets/whatsapp.png" alt="whatsapp" />
          </a>
          <a href="https://www.facebook.com">
            <img src="./assets/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com">
            <img src="./assets/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.snapchat.com">
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
          <TextField id="outlined-basic" label="Name" variant="filled" 
          color="secondary" 
          />
          <TextField id="outlined-basic" label="Email" variant="filled" 
          color="secondary" 
            // inputProps={{ className: classes.input }}
          />
          <TextareaAutosize
            p={1}
            m={2}
            aria-label="minimum height"
            minRows={5}
            style={{
               width: 250,
               background : 'transparent', 
              //  color: 'white',
              fontSize : '16px', 
               padding:'5px',
                             
              }}
            placeholder="your message here"
          />
          <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Contact;
