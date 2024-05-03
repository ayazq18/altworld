import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
function SideNavBar() {
    return (
        <Grid item xs={12} md={2}>
            <Box sx={{ p:2, display: 'flex', gap:'12px', alignItems:'center', borderBottom: '1px solid rgba(128, 128, 128, 0.3)',}}>
                <Box>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <KeyboardArrowUpSharpIcon style={{fontSize:'15px', border: '2.5px solid black', marginRight: '-1px' }} />
                        <KeyboardArrowUpSharpIcon style={{fontSize:'15px', border: '2.5px solid black' }} />
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <KeyboardArrowDownSharpIcon style={{fontSize:'15px', border: '2.5px solid black' }} />
                    </Box>
                </Box>

                <Typography
                    variant="h6"
                    // color="textSecondary"
                    sx={{
                        // pb: 3,
                        // pl: 3,
                        fontSize:'14px',
                        fontWeight: 700,
                        // borderBottom: '1px solid rgba(128, 128, 128, 0.3)',
                        textAlign: 'left',
                    }}
                >
                    Hi, AltWorld
                </Typography>
            </Box>

            <Stack spacing={0} direction="row" gap={2} alignItems='center' sx={{ p: 3 }}>
                <HouseIcon style={{ color: '#4fd1c5', backgroundColor: '#f3f3f3', borderRadius: '50%', padding: '2px' }} />
                <Typography
                    variant="body5"
                    sx={{
                        fontWeight: 700,
                        textAlign: 'left',
                    }}
                >
                    Dashboard
                </Typography>
            </Stack>

            <Card sx={{ m: 1, p: 1, backgroundColor: '#4fd1c5', borderRadius: '12px' }}>
                <Stack>
                    <Typography variant="h4" sx={{ p: 0.5, bgcolor: 'white', width: 35, borderRadius: 4, textAlign: 'center' }}>
                        +
                    </Typography>

                    <Typography variant="body1" sx={{ pt: 2, color: 'white', fontWeight: 700 }}>
                        New Assignment?
                    </Typography>

                    <Typography variant="body4" sx={{ pt: 2, color: 'white', fontSize: '13px' }}>
                        Select from pre-defined questions to have a quick tuenaround.
                    </Typography>

                    <Button type="submit" variant="contained"
                        sx={{ bgcolor: 'white', color: 'black', p: 1, mt: 2, textTransform: 'capitalize' }}
                    //  loading={isSubmitting}
                    >
                        Create New Assignment
                    </Button>
                </Stack>
            </Card>

        </Grid>
    )
}

export default SideNavBar
