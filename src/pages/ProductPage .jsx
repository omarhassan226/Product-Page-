import React from 'react';
import { Container } from '@mui/material';
import ImageCarousel from './components/ImageCarousel';
import RelatedProducts from './components/RelatedProducts';
import FAQs from './components/FAQs';
import Section2 from './components/section2/Section2';
import Navbar from '../components/navbar/Navbar';

const ProductPage = () => {
    return (
        <>
        <Navbar/>
        <Container maxWidth="lg" sx={{ padding: '20px' }}>
            <ImageCarousel />
            <Section2/>
            <RelatedProducts />
            <FAQs />
        </Container>
        </>
    );
};

export default ProductPage;
