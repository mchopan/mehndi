import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contect/Contact';
import Footer from './components/Footer/Footer'
// import { ThemeProvider, createTheme } from '@mui/material/styles';


// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

const Main = () => {
    return (
        <>
            {/* <ThemeProvider theme={darkTheme}> */}
                <div className='app-container'>
                    <Header />
                    <About />
                    <Gallery />
                    <Testimonials />
                    <Contact />
                    <Footer />
                    <Nav />
                </div>
            {/* </ThemeProvider> */}
        </>
    );
}

export default Main;
