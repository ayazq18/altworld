'use client'
import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const RangeSlider = ({ CandidateData }) => {

    return (
        <>

            <Stack direction='row' justifyContent='flex-start' alignItems='center' gap={1} mt={2} >
                <Typography sx={{ fontSize: '10px' }}>Behavioural</Typography>
                <Slider
                    value={CandidateData?.behaviour}
                    max={10}
                    sx={{
                        width: '150px',
                        height: '8px', // Adjust the height here
                        '& .MuiSlider-track': {
                            backgroundColor:  CandidateData?.behaviour >= 7 ? 'lightgreen' : 'orange',
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            display: 'none',
                        },
                    }}
                />

                <Typography sx={{ fontSize: '12px', color:`${CandidateData?.behaviour >= 7 ? 'lightgreen' : 'orange'}` }}>{CandidateData?.behaviour} / 10</Typography>
            </Stack>

            <Stack direction='row' justifyContent='flex-start' alignItems='center' gap={1} mt={0} >
                <Typography sx={{ fontSize: '10px' }}>Communication</Typography>
                <Slider
                    value={CandidateData?.communication}
                    max={10}
                    sx={{
                        width: '150px',
                        height: '8px', // Adjust the height here
                        '& .MuiSlider-track': {
                            backgroundColor: CandidateData?.communication >= 7 ? 'lightgreen' : 'orange',
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            display: 'none',
                        },
                    }}
                />

                <Typography sx={{ fontSize: '10px', color:`${CandidateData?.communication >= 7 ? 'lightgreen' : 'orange'}` }}>{CandidateData?.communication} / 10</Typography>
            </Stack>

            <Stack direction='row' justifyContent='flex-start' alignItems='center' gap={1} mt={0} >
                <Typography sx={{ fontSize: '10px' }}>Situation handling</Typography>
                <Slider
                    value={CandidateData?.handling}
                    max={10}
                    sx={{
                        width: '150px',
                        height: '8px', // Adjust the height here
                        '& .MuiSlider-track': {
                            backgroundColor: CandidateData?.handling >= 7 ? 'lightgreen' : 'orange',
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            display: 'none',
                        },
                    }}
                />

                <Typography sx={{ fontSize: '10px', color:`${CandidateData?.handling >= 7 ? 'lightgreen' : 'orange'}` }}>{CandidateData?.handling} / 10</Typography>
            </Stack>

            </>
    );
};

export default RangeSlider;
