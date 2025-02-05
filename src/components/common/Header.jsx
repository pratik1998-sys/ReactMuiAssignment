import React from 'react';
import { Typography, Box, Popover, Button, Stack } from '@mui/material';
import ProfileImageIcon from './ProfileImageIcon';
import LogoutIcon from '../../svg/LogoutIcon';
import { useNavigate } from 'react-router';
import { loginActions } from '../../store/index.js'
import { useDispatch } from 'react-redux';
// import UserProfileSvg from '../../svg/UserProfileSvg';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        dispatch(loginActions.login())
        navigate('/login');
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Box style={{
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                height: '80px',
                background: '#ffffff',
                // position: 'absolute',
                width: '94vw',
                borderBottom: '1px solid #DFE3E8',
            }}>
                <Typography
                    variant="body1"
                    style={{
                        color: 'var(--Basic-700, #2E3A59)',
                        fontFamily: 'Poppins',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '32px',
                        marginLeft: '20px'
                    }}
                >Good morning, Maharram 👋</Typography>

                <Box position="absolute"
                    right='6vw'
                    style={{
                        borderRadius: '24px'
                    }}>
                    <div onClick={handleClick} style={{ ":hover": { cursor: 'pointer' } }} >
                        <ProfileImageIcon />
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Stack direction={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                            <ProfileImageIcon />
                            <Box><Typography>Maharrm Hasanli</Typography></Box>
                            <Box><Typography>maga.hesenli@gmail.com</Typography></Box>
                            <Box><Button startIcon={<LogoutIcon />} onClick={handleLogout}>Logout</Button></Box>
                        </Stack>
                    </Popover>
                </Box >
                <hr />
            </Box >
        </>
    )
}

export default Header