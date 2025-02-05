import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';

// import StarSvg from '../../../../assets/remedial/svg/starSvg'


const LeaderRanking = ({ data, index, value }) => {

  const theme = useTheme();
  const [backgroundColor, setBackgroundColor] = useState(theme.palette.primary[0])

  useEffect(() => {
    // Check if index is 12 and update the background color
    if (index === 12) {
      setBackgroundColor(theme.palette.grey[100]);
    } else {
      // Reset the background color if the index is not 12
      setBackgroundColor(theme.palette.primary[0]);
    }
  }, [index, theme.palette.primary]);

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ bgcolor: backgroundColor }}>
      <Stack direction={'row'} alignItems={'center'} gap={'27px'} justifyContent={'space-between'}>
        {/* <Typography component={'p'} sx={{
          fontFamily: 'Poppins-Medium',
          fontSize: '14px',
          color: (theme) => theme.palette.grey[900]
        }}>{index}.</Typography> */}
        <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
          <Avatar alt="Avatar" sx={{ width: 30, height: 30 }} src={data.profile_pic} />
          <Stack>
            <Typography component={'p'} sx={{
              fontFamily: 'Poppins-Medium',
              fontSize: '14px',
              color: (theme) => theme.palette.grey[900]
            }}>{data.name}</Typography>
            <Typography component={'p'} sx={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: '14px',
              color: (theme) => theme.palette.grey[800]
            }}>Avg: {value}%</Typography>
          </Stack>
        </Stack>

      </Stack>
      {/* ratings */}

      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Stack direction={'row'} alignItems={'center'} gap={0}>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => theme.palette.warning.main
              }
            }
          }}>
            {/* <StarSvg /> */}
          </Box>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => value >= 80 ? theme.palette.warning.main : theme.palette.warning[300]
              }
            }
          }}>
            {/* <StarSvg /> */}
          </Box>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => (value >= 90 && value <= 100) ? theme.palette.warning.main : theme.palette.warning[300]
              }
            }
          }}>
            {/* <StarSvg /> */}
          </Box>
        </Stack>
        {/* <Typography component={'p'} sx={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: '14px',
          color: (theme) => theme.palette.warning.main
        }}>{value}%</Typography> */}
        <Box sx={{
          bgcolor: '#E7EEFE',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} >
          <Typography >{index}</Typography>
        </Box>
      </Stack>

    </Stack>
  )
}

export default LeaderRanking