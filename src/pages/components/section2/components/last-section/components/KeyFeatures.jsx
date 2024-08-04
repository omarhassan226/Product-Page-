import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const KeyFeatures = () => {
    const features = [
        '100% Cotton',
        'Breathable Fabric',
        'Machine Washable',
        'Available in Multiple Sizes',
        'Stylish Design',
        'Durable and Long-lasting',
    ];

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginTop:'15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>Key Features</Typography>
            <List>
                {features.map((feature, index) => (
                    <ListItem key={index} sx={{ padding: '5px 0' }}>
                        <CheckCircleIcon sx={{ marginRight: '10px', color: '#4caf50' }} />
                        <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body1', color: 'textPrimary' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default KeyFeatures;
