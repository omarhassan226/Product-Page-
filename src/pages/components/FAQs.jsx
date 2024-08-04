import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQs.css';
const FAQs = () => {
    const [visibleElements, setVisibleElements] = useState([]);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => [...prev, entry.target.id]);
                        observer.current.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        )
    );

    useEffect(() => {
        const elements = document.querySelectorAll('.slide-in-left');
        elements.forEach(element => observer.current.observe(element));
        return () => {
            elements.forEach(element => observer.current.unobserve(element));
        };
    }, []);

    const faqs = [
        { question: 'What is the return policy?', answer: 'You can return the product within 30 days.' },
        { question: 'How long does shipping take?', answer: 'Shipping takes 3-5 business days.' },
    ];

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h5" className={`slide-in-left ${visibleElements.includes('faqs-title') ? 'is-visible' : ''}`} id="faqs-title">
                FAQs 📜
            </Typography>
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    className={`slide-in-left ${visibleElements.includes(`faq-${index}`) ? 'is-visible' : ''}`}
                    id={`faq-${index}`}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQs;
