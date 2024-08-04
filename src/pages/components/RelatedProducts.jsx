import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../../colors/colors';

const RelatedProducts = () => {
    const relatedProducts = [
        { id: 1, name: 'Hawaii', image: 'summer7.webp' },
        { id: 2, name: 'Maldef', image: 'summer8.webp' },
        { id: 3, name: 'Gouna', image: 'summer9.webp' },
    ];

    const [visible, setVisible] = useState([]);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(prev => [...prev, entry.target.id]);
                        observer.current.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        )
    );

    useEffect(() => {
        const elements = document.querySelectorAll('.product-card');
        elements.forEach(element => observer.current.observe(element));
        return () => {
            elements.forEach(element => observer.current.unobserve(element));
        };
    }, []);

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h5">Related Products 👇🏻</Typography>
            <Grid container spacing={2} sx={{ marginTop: '0px' }}>
                {relatedProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card id={`product-${product.id}`} className={`product-card ${visible.includes(`product-${product.id}`) ? 'is-visible' : ''}`}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={product.image}
                                alt={product.name}
                                sx={{ cursor: 'pointer' }}
                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6">{product.name}</Typography>
                                <ArrowForwardIcon sx={{ color: colors.green, cursor: 'pointer' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RelatedProducts;
