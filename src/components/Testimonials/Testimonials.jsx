import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box, Typography } from '@mui/material'
import './testimonials.css'


const Testimonials = () => {

    const data = [
        {
            avatar: './assets/user1.jpg',
            name: 'Saloniya',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sodales erat, aliquet commodo tellus finibus vel. Nam in risus a nisi volutpat malesuada a at diam. Aliquam erat volutpat.'
        },
        {
            avatar: './assets/user2.jpg',
            name: 'Sansa',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sodales erat, aliquet commodo tellus finibus vel. Nam in risus a nisi volutpat malesuada a at diam. Aliquam erat volutpat.'
        },
        {
            avatar: './assets/user3.jpg',
            name: 'Emma',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sodales erat, aliquet commodo tellus finibus vel. Nam in risus a nisi volutpat malesuada a at diam. Aliquam erat volutpat.'
        },
        {
            avatar: './assets/user4.jpg',
            name: 'Emarson',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sodales erat, aliquet commodo tellus finibus vel. Nam in risus a nisi volutpat malesuada a at diam. Aliquam erat volutpat.'
        },
        {
            avatar: './assets/user5.jpg',
            name: 'Luna',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sodales erat, aliquet commodo tellus finibus vel. Nam in risus a nisi volutpat malesuada a at diam. Aliquam erat volutpat.'
        },
        {
            avatar: './assets/user6.jpg',
            name: 'Scarlett',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sodales erat, aliquet commodo tellus finibus vel. Nam in risus a nisi volutpat malesuada a at diam. Aliquam erat volutpat.'
        }
    ]

    return (

        <>
        <Typography variant="h5" color="inherit" textAlign={'center'}  id='gallery'
        sx={{
        margin : '5px',
        marginTop : '5px',
        padding : 'px'
      }}
    >
      Review By Clients
      </Typography>
        <Box>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            id='testimonials'
            >
            {
                data.map((user, index) => {
                    return (
                        <SwiperSlide key={index} overflow='hidden'>
                            <Box
                                sx={{
                                    
                                    borderRadius : '5px', 
                                    padding : '10px',
                                    margin : '10px',
                                    display : 'flex',
                                    flexDirection : 'column',
                                    alignItems : 'center',
                                    marginTop : '20px',
                                    backdropFilter : 'blur(10px)'
                                }}
                                className="testimonial_box"
                                >

                                <Box className='avatar-container'
                                    sx={{
                                        height: '50px',
                                        width: '50px',
                                        borderRadius: '100px',
                                        overflow: 'hidden',
                                        border: 'solid pink 3px',
                                        backgroundColor: 'pink'
                                    }}
                                >
                                    
                                    <img src={user.avatar} alt={user.name} height='50px' />
                                </Box>
                                <Box text-container 
                                    sx={{
                                        display : 'flex',
                                        flexDirection : 'column',
                                        gap : '10px'
                                    }}
                                >
                                    <Typography variant="h5" color="inherit"
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        {user.name}
                                    </Typography>

                                    <Typography variant="body1" color="inherit"
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        {user.review}
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    )
                })
            }


        </Swiper>
    </Box>
    </>
    );
}

export default Testimonials;
