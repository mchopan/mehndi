import React from 'react';
import './header.css'
import { Typography, Button, Stack } from '@mui/material'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import MessageIcon from '@mui/icons-material/Message';

const Header = () => {
    return (
        <div className='header-title' id='home'>
            <Typography variant="subtitle1" color="inherit">
                Hello, i'm
            </Typography>

            <Typography className='heading-name' variant="h4" color="inherit">
                Nazima Nissar
            </Typography>

            <Typography variant="subtitle1" color="inherit">
                Mehndi Designer
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="center"
                alignItems="center"
                sx={{
                    marginTop : '20px'
                }}
            >
                <Button variant="outlined" startIcon={<DownloadForOfflineIcon />}>Download CV</Button>
                <Button variant="contained" startIcon={<MessageIcon />}>Let's Talk</Button>
            </Stack>
        </div>
    );
}

export default Header;
