'use client'
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { candidatesApi } from './MockApi';
import RangeSlider from './Progress';

function InfoSection({ selectedIndex }) {

    const [candidates, setCandidates] = useState(candidatesApi);

    const handleShortlist = () => {
        const updatedCandidates = candidates.map((candidate) =>
            candidate.index === selectedIndex ? { ...candidate, status: 'shortlisted', communication: 8, handling: 7, behaviour: 6 } : candidate
        );
        setCandidates(updatedCandidates);
    };

    const filterCandidateData = candidatesApi.filter((item, index) => item.index == selectedIndex)
    const CandidateData = filterCandidateData[0]
    return (
        <Grid item xs={12} md={7} sx={{mt:10}}>
            <Card sx={{ ml: { xs: 0, md: 5 }, p: 1, boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)', borderRadius: '20px', }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6} sx={{ p: 1, height: '100vh', }}>

                        <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}
                            sx={{
                                mt: 2,
                                p: 1,
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                }
                            }}
                        >

                            <Stack direction='row' justifyContent='flex-start' alignItems='center' gap={1}>
                                <img src={CandidateData?.image} alt="Example Image" style={{ width: 50, height: 50, borderRadius: '14px' }} />
                                <Box>
                                    <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '12px' }}>{CandidateData?.name}</Typography>
                                    <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '10px', color: '#808080' }}>{CandidateData?.email}</Typography>
                                </Box>
                            </Stack>

                            <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '22px', color: `${CandidateData?.score >= 60 ? '#3CB371' : 'orange'}`, fontWeight: '700' }}>{CandidateData?.score}%</Typography>


                        </Stack>

                        {/* ------------------Range----------- */}

                        <Stack sx={{ height: '20%', }}>
                            <RangeSlider CandidateData={CandidateData} />
                        </Stack>

                        <Box sx={{ height: '47vh' }}>
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>About</Typography>
                                <Typography sx={{ fontSize: '12px', }}>{CandidateData?.about}</Typography>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Experience</Typography>
                                <Typography sx={{ fontSize: '12px', }}>{CandidateData?.experience}</Typography>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Experience</Typography>
                                <Typography sx={{ fontSize: '12px', }}>{CandidateData?.hobbies}</Typography>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Experience</Typography>
                                <Typography sx={{ fontSize: '12px', }}>{CandidateData?.introduction}</Typography>
                            </Box>
                        </Box>

                        <Button variant='contained' disabled={CandidateData?.status === 'shortlisted'}
                        onClick={handleShortlist}
                            sx={{ bgcolor: '#1ec3b3', borderRadius: '10px', mt: 2, pl: 10, pr: 10 }}>
                            {CandidateData?.status === 'review' ? 'Shortlist' : 'Selected'}
                        </Button>

                    </Grid>
                    <Grid item xs={12} md={6} sx={{height: '70vh', bgcolor: '#e2e8f0', borderRadius:'15px' }}>
                        <iframe width="100%" height="100%" style={{borderRadius:'15px'}} src="https://www.youtube.com/embed/SxoRrlfkHho" frameborder="0" allowfullscreen></iframe>
                    </Grid>

                </Grid>
            </Card>
        </Grid>

    )
}

export default InfoSection


