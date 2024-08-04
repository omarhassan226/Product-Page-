import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useReviews } from '../../../../../../context/ReviewsContext'; 
import { colors } from '../../../../../../colors/colors';

const ReviewSubmissionForm = () => {
    const [formData, setFormData] = useState({ name: '', rating: '', comment: '' });
    const { addReview } = useReviews();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            name: formData.name,
            rating: parseInt(formData.rating),
            answer: formData.comment,
            image: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 70) + 1}`
        };
        addReview(newReview);
        setFormData({ name: '', rating: '', comment: '' });
    };

    return (
        <Box sx={{ mb: 4, mt: '24px' }}>
            <Typography variant="h5">Submit Your Review 📖</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    type="number"
                    name="rating"
                    label="Rating (1-5)"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="comment"
                    label="Your Review"
                    value={formData.comment}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                />
                <Button type="submit" variant="contained" sx={{ width: '100%', backgroundColor: colors.green, '&:hover': { backgroundColor: colors.darkBlue } }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default ReviewSubmissionForm;
