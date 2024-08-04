import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

export default function HoverRatingReview({rating}) {
    const [value, setValue] = React.useState(rating);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                readOnly
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </Box>
    );
}
