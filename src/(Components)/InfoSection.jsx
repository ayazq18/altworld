'use client'
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import RatingSlider from './Progress';
import { candidatesApi } from './MockApi';

function InfoSection({ selectedIndex }) {

    const filterCandidateData = candidatesApi.filter((item, index) => item.index == selectedIndex)
    const CandidateData = filterCandidateData[0]
    console.log('filterCandidateData--->', CandidateData)
    return (
        // <Grid sx={{height:'100%', border:'1px solid green'}}>
        <Grid item xs={12} md={7} sx={{}}>
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

                        {/* <ProgressBar now={50} label='now' style={{ height: '20px', width:'40%', color:'red' }} /> */}
                        {/* <RatingSlider/> */}
                        <Stack sx={{ height: '20%', }}></Stack>

                        <Box sx={{ height:'55vh'  }}>
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

                        <Button variant='contained' disabled={CandidateData?.status === 'shortlisted'} sx={{ bgcolor: '#1ec3b3', borderRadius: '10px', mt: 2, pl: 10, pr: 10 }}>{CandidateData?.status === 'review' ? 'Shortlist' : 'Selected'}</Button>

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ border: '1px solid blue', height: '70vh', bgcolor: '#e2e8f0' }}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SxoRrlfkHho" frameborder="0" allowfullscreen></iframe>
                    </Grid>

                </Grid>
            </Card>
        </Grid>

    )
}

export default InfoSection


