'use client'
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const RatingSlider = () => {
    const [value, setValue] = useState(80); 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: 300 }}>
            <Typography id="discrete-slider" gutterBottom>
                Rating
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={100}
            />
            <Typography variant="body1" gutterBottom>{`${value}%`}</Typography>
        </div>
    );
};

export default RatingSlider;
