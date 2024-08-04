import React, { useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { styles } from "../../../../../../../styles/styles";
import HoverRating from './components/HoverRating';
import Sizes from './components/Sizes';
import FAQs1 from './components/FAQs1';
import './rightSection.css'; 

const sizes = [
    { id: 1, size: 'S' },
    { id: 2, size: 'M' },
    { id: 3, size: 'L' },
    { id: 4, size: 'XL' }
];

const ProductDetails = () => {
    const [selectedSizes, setSelectedSizes] = useState([]); 

    const handleSizeToggle = (id) => {
        setSelectedSizes((prevSelectedSizes) =>
            prevSelectedSizes.includes(id)
                ? prevSelectedSizes.filter(sizeId => sizeId !== id)
                : [...prevSelectedSizes, id] 
        );
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h4" className="slide-in-left">High-quality cotton shirt</Typography>
            <Typography variant="body1" sx={{ mt: 2 }} className="slide-in-left">
                Get ready for sunny days with our vibrant summer tee! Made from lightweight, breathable fabric, this shirt keeps you cool and stylish on hot days. Perfect for beach outings, holiday adventures, or casual summer hangs. Available in fun colors and a range of sizes to fit every summer vibe.
            </Typography>
            <Link variant="a" sx={styles.linkStyle} className="slide-in-left">Brand: Za❤️ra </Link>
            <hr className="slide-in-left" />
            <Grid container spacing={3} sx={{ marginTop: '16px' }}>
                <Grid item xs={12} md={6} sx={{ paddingTop: '0 !important' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }} className="slide-in-left">
                        <span style={{ marginTop: '9px', fontSize: '20px' }}>$</span>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '30px' }}> 100.</Typography>
                        <span style={{ marginTop: '9px' }}>00</span>
                    </Box>
                    <Box className="slide-in-left">
                        <HoverRating />
                    </Box>
                    <Box sx={{ display: 'flex', paddingTop: '30px' }} className="slide-in-left">
                        {sizes.map((size) => (
                            <Sizes
                                size={size}
                                key={size.id}
                                isSelected={selectedSizes.includes(size.id)}
                                handleSizeToggle={() => handleSizeToggle(size.id)}
                            />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} className="slide-in-left">
                    <Box>
                        <FAQs1 />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetails;
