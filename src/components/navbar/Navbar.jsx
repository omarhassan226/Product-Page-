import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Avatar, Menu, MenuItem, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Search, ShoppingCart, Notifications, Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { colors } from '../../colors/colors';
import "./navbar.css";

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: '100%',
    color: 'black',
    '&:hover': {
        backgroundColor: theme.palette.grey[200],
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(),
        width: 'auto',
        display:'flex',
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
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#161828' }}>
            <Container>
                <Toolbar sx={{ padding: '0 !important', display: 'flex', justifyContent: 'space-between !important' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:{xs:'space-between', md:'flex-start'}, width:{xs:'100%', md:'25%'} }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { md: 'none' } }} onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
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
                    <SearchBar sx={{ width: '40%', display: { xs: 'none', md: 'block' } }}>
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
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={{}}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <SearchBar sx={{ width: '100%' }}>
                                <SearchIconWrapper>
                                    <Search />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search..."
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </SearchBar>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon><ShoppingCart /></ListItemIcon>
                            <ListItemText primary="Cart" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Notifications /></ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItem>
                        <ListItem button onClick={handleProfileMenuOpen}>
                            <ListItemIcon><Avatar alt="User" src="https://i.pravatar.cc/300" /></ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
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
