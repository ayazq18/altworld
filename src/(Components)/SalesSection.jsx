'use client'
import { CopyAll, Edit, Image } from '@mui/icons-material'
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import React, { useState } from 'react'
import { candidatesApi } from './MockApi';
import InfoSection from './InfoSection';

function SalesSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [statusFilter, setStatusFilter] = useState(0);

    const handleIndex = (index) => {
        setSelectedIndex(index);
    };

    const handleIStatusFilter = (status) => {
        setStatusFilter(status);
    };

    const filteredCandidateData = statusFilter ? candidatesApi.filter(item=>item.status == statusFilter) : candidatesApi;
    return (
        
        <Grid item xs={12} md={9} gap={0} display='flex' flexWrap='wrap'>
            <Grid item xs={12} md={5} sx={{}}>

                <Stack direction='row' pb={1} >
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        sx={{
                            fontSize: '15px',
                            pl: 3,
                            textAlign: 'left',
                        }}
                    >
                        Pages
                    </Typography>
                    <Typography
                        variant="h6"
                        // color="textSecondary"
                        sx={{
                            fontSize: '15px',
                            pl: 1,
                            textAlign: 'left',
                        }}
                    >
                        / Assignment
                    </Typography>

                </Stack>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '15px',
                        pb: 3,
                        pl: 3,
                        textAlign: 'left',
                    }}
                >
                    Sales BDE
                </Typography>

                {/* <Box sx={{display:'flex'}}> */}

                <Card sx={{ p: 1, boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)', borderRadius: '20px', }}>

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>

                        <Typography
                            variant="h6"
                            sx={{
                                p: 1,
                                textAlign: 'left',
                            }}
                        >
                            Sales BDE
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '5px'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    // pb: 3,
                                    // pl: 3,
                                    textAlign: 'left',
                                    color: '#3CB371'
                                }}
                            >
                                Active
                            </Typography>
                            <Edit sx={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', p: 0.3, bgcolor: 'white', width: 25, borderRadius: 3, textAlign: 'center' }} />
                        </Box>

                    </Stack>

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>

                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '14px',
                                p: 1,
                                textAlign: 'left',
                                fontWeight: 700,
                                color: '#808080'
                            }}
                        >
                            Assignment Link
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '5px'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '14px',
                                    color: 'blue',
                                    textAlign: 'left',
                                    fontWeight: 700,
                                }}
                            >
                                https://tiny.url.asknakdna/
                            </Typography>
                        </Box>

                    </Stack>

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>

                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '14px',
                                p: 1,
                                textAlign: 'left',
                                fontWeight: 700,
                                color: '#808080'
                            }}
                        >
                            Assignment Hour
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '5px'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '14px',
                                    textAlign: 'left',
                                    fontWeight: 700,
                                    color: '#808080'
                                }}
                            >
                                3 hours
                            </Typography>
                        </Box>

                    </Stack>

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>

                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '14px',
                                p: 1,
                                textAlign: 'left',
                                fontWeight: 700,
                                color: '#808080'
                            }}
                        >
                            Assignment Ends at
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '5px'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '14px',
                                    textAlign: 'left',
                                    fontWeight: 700,
                                    color: '#808080'
                                }}
                            >
                                11 March 2024
                            </Typography>
                        </Box>

                    </Stack>

                    <Stack direction='row' justifyContent='flex-start' alignItems='center' gap={2} sx={{ mt: 2, pl: 1 }}>
                        <Button
                            variant={statusFilter === "review" ? "contained" : ""}
                            color="primary"
                            startIcon={<ViewInArSharpIcon />}
                            onClick={()=>handleIStatusFilter('review')}
                            sx={{
                                textTransform: 'none',
                                borderRadius: '14px',
                                bgcolor: 'white',
                                color: 'black',
                                boxShadow: statusFilter === "review" && '0px 0px 4px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px' }}>To Review</Typography>
                        </Button>
                        <Button
                            variant={statusFilter === "shortlisted" ? "contained" : ""}
                            color="primary"
                            startIcon={<CopyAll />}
                            onClick={()=>handleIStatusFilter('shortlisted')}
                            sx={{
                                textTransform: 'none',
                                borderRadius: '14px',
                                bgcolor: 'white',
                                color: 'black',
                                boxShadow: statusFilter === "shortlisted" && '0px 0px 4px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px' }}>Shortlisted</Typography>
                        </Button>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2} sx={{ mt: 2, p: 1 }}>
                        <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px', color: '#808080' }}>Candidate</Typography>
                        <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px', color: '#808080' }}>Score</Typography>
                    </Stack>

                    <Box
                        sx={{
                            height: '300px', 
                            overflowY: 'scroll', 
                            '&::-webkit-scrollbar': {
                                display: 'none' 
                            },
                            '-ms-overflow-style': 'none',
                            scrollbarWidth: 'none' 
                        }}
                    >
                        {filteredCandidateData.map((item, index) => (
                            <Stack key={index} onClick={()=>handleIndex(index)} direction='row' justifyContent='space-between' alignItems='center' gap={2}
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
                                    <img src={item.image} alt="Example Image" style={{ width: 50, height: 50, borderRadius: '14px' }} />
                                    <Box>
                                        <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px' }}>{item.name}</Typography>
                                        <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px', color: '#808080' }}>{item.email}</Typography>
                                    </Box>
                                </Stack>

                                <Typography variant='h6' sx={{ paddingRight: '5px', textTransform: 'uppercase', fontSize: '15px', color: `${item.score >= 60 ? '#3CB371' : 'orange'}`, fontWeight: '700' }}>{item.score}%</Typography>

                            </Stack>
                        ))}
                    </Box>


                </Card>
               
            </Grid>
                <InfoSection selectedIndex={selectedIndex}/>
        </Grid>
    )
}

export default SalesSection
