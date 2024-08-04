// FAQs1.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Avatar, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HoverRatingReview from './HoverRatingReview';
import { colors } from '../../../../../../../../colors/colors';
import { useReviews } from '../.././../../../../../../context/ReviewsContext'; // Adjust the import path as necessary

const FAQs1 = () => {

    const { reviews } = useReviews();

    return (
        <Box sx={{ height: '570px', overflowY: 'scroll', mt:2 }}>
            {reviews.map((faq, index) => (
                <Accordion key={index} style={{backgroundColor:colors.fairos, marginBottom:'10px', borderRadius:'20px 0', color:colors.white}}>
                    <AccordionSummary 
                        sx={{ padding: '0 !important' }} 
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <Avatar alt="User" src={faq.image} />
                            </IconButton>
                            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                {faq.name}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                <HoverRatingReview rating={faq.rating}/>
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQs1;
