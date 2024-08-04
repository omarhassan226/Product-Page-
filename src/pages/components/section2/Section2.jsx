import React from 'react'
import { Grid } from '@mui/material';
import LeftSection from './components/Left-Section/LeftSection';
import RightSection from './components/Right-Section/RightSection';
import LastSection from './components/last-section/LastSection';

const Section2 = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4.5}>
                    <LeftSection />
                </Grid>
                <Grid item xs={12} md={4.5}>
                    <RightSection />
                </Grid>
                <Grid item xs={12} md={3}>
                    <LastSection />
                </Grid>
            </Grid>
        </>
    )
}

export default Section2
