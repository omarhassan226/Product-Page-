import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { colors } from '../../colors/colors';

const ImageCarousel = () => {
    const images = [
        'model10.avif',
        'clothes1.jpg',
        'clothes3.jpg',
    ];

    return (
        <>
        <Box sx={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
            <Typography sx={{display:'flex', alignItems:'center'}}> <span style={{color:colors.green ,fontSize:'18px', fontWeight:'bold'}}>Home</span>  <ArrowForwardIos/> <span style={{color:colors.green,fontSize:'18px', fontWeight:'bold'}}>Men’s fashion</span>  <ArrowForwardIos/> <span style={{color:colors.green,fontSize:'18px', fontWeight:'bold'}}>Tops</span>  <ArrowForwardIos/> <span style={{fontSize:'18px', fontWeight:'bold'}}> Bundles Men’s Funny T-shirts Bundle</span></Typography>
        </Box>
        <Box sx={{ width: '100%', mb: 4 }}>
            <Carousel
                autoPlay={true}
                navButtonsAlwaysVisible={true}
                interval={2000}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Product ${index}`} style={{ width: '100%', height: '500px' }} />
                ))}
            </Carousel>
        </Box>
        </>
    );
};

export default ImageCarousel;
