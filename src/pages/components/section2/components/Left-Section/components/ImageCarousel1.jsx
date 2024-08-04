import React, { useState } from 'react';
import { Box, Grid, Paper, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { colors } from '../../../../../../colors/colors';

const ImageCarousel1 = () => {
    const images = [
        'summer4.webp',
        'summer6.avif',
        'summer7.webp',
        'summer8.webp',
        'summer9.webp',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 62, y: 0 });

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={12} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton
                    onClick={handlePrevious}
                    sx={{ position: 'absolute', left: 0, zIndex: 1, backgroundColor:colors.green, color:colors.white }}
                >
                    <ArrowBackIos />
                </IconButton>
                <Box
                    sx={{
                        backgroundImage: `url(${images[currentImageIndex]})`,
                        backgroundSize: hovered ? '200%' : 'cover',
                        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                        height: '70vh',
                        width: '100%',
                        transition: 'background-size 0.3s, background-position 0.3s',
                        cursor:'pointer'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                />
                <IconButton
                    onClick={handleNext}
                    sx={{ position: 'absolute', right: 0, zIndex: 1, backgroundColor:colors.green, color:colors.white }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {images.map((image, index) => (
                        <Paper
                            key={index}
                            sx={{
                                cursor: 'pointer',
                                border: index === currentImageIndex ? '2px solid #3f51b5' : '2px solid transparent',
                                display:'flex',
                                width:'100%',
                                height:'100%',
                                justifyContent:'center', 
                                alignItems:'center',
                            }}
                            onClick={() => setCurrentImageIndex(index)}
                        >
                            <img src={image} alt={`Thumbnail ${index}`} style={{ width: '100%', height:'100%' }} />
                        </Paper>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ImageCarousel1;

