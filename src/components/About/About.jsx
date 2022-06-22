import { Box } from '@mui/material';
import React from 'react';
import './about.css'


const About = () => {
  return (
    <div>

      <Box className='about-container'>
        <div className='social-icons'>
         <a href='https://www.limkedin.com'><img src='./assets/linkedIn.png' alt='linkedIn'/></a>
         <a href='https://www.twitter.com'><img src='./assets/twitter.png' alt='Twitter'/></a>
         <a href='https://www.web.whatsapp.com'><img src='./assets/clubhouse.png' height='50px' alt='whatsapp'/></a>
        </div>
        <div className='profile-bg-container'>
          <img src='./assets/profile_pic.jpg' alt='profilePic' height="250px" />
        </div>
      </Box>
    </div>
  );
}

export default About;
