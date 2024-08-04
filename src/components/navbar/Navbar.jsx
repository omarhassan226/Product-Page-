import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Avatar, Menu, MenuItem, Container } from '@mui/material';
import { Search, ShoppingCart, Notifications } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { colors } from '../../colors/colors';
import "./navbar.css"

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width:'100%',
    color: 'black',
    '&:hover': {
        backgroundColor: theme.palette.grey[200],
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#161828' }}>
            <Container>
                <Toolbar sx={{ padding: '0 !important', display: 'flex', justifyContent: 'space-between !important' }}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Typography variant="h6" noWrap component="div">
                            StyleSavvy
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, flexDirection: 'column' }}>
                            <Box sx={{ color: colors.darkText, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LocationOnIcon />
                                <span style={{ color: colors.darkText }}>
                                    Deliver to
                                </span>
                            </Box>
                            <Typography variant="body1" noWrap component="div" sx={{ ml: 1 }}>
                                Egypt, Portsaid
                            </Typography>
                        </Box>
                    </Box>
                    <SearchBar sx={{ width: '40%' }}>
                        <SearchIconWrapper>
                            <Search />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchBar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <ShoppingCart />
                        </IconButton>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Notifications />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar alt="User" src="https://i.pravatar.cc/300" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
