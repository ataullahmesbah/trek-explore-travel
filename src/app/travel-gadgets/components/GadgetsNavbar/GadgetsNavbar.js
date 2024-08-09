'use client';



import React, { useState } from 'react';
import Link from 'next/link'

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    InputBase,
    Badge,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    Grid,


} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaUser, FaUserAltSlash, FaUserEdit } from 'react-icons/fa';
import Image from 'next/image';


const GadgetsNavbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>

            {/* First AppBar  Start */}
            <AppBar position="static" sx={{ backgroundColor: 'rgb(8 47 73)', justifyContent: 'space-between' }} className=' shadow-md border shadow-slate-50 '>
                <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }} >
                    <Link href="/travel-gadgets">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/logo.webp"
                                alt="Trek Explore Travel Logo"
                                width={100}
                                height={30}
                                style={{ maxWidth: '100px', maxHeight: '40px' }} // Debugging: Ensure sizes are applied
                                className="logo"
                            />
                            <h1 className="text-xl lg:text-2xl font-bold poppins">Trek Explore Travel</h1>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <Box sx={{ maxWidth: '50%', flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: '0 10px',
                                borderRadius: '4px',
                                width: '100%',
                            }}
                        >
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ flexGrow: 1 }}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Icons and Menu Button */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>

                        <Link href='/'>
                            Home
                        </Link>


                        <Link href='/login'>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>

                                <FaUserEdit className='w-6 h-6 text-gray-300' />
                                <Typography variant="body1" component="div">
                                    Account Sign In
                                </Typography>
                            </Box>
                        </Link>


                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" component="div">
                                Return & Orders
                            </Typography>
                        </Box>
                        <IconButton aria-label="cart">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>

                {/* Responsive Search and Menu */}
                <Drawer anchor="top" open={menuOpen} onClose={toggleMenu}>
                    <List>
                        <ListItem>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    padding: '0 10px',
                                    borderRadius: '4px',
                                    width: '100%',
                                }}
                            >
                                <InputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ flexGrow: 1 }}
                                />
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Box>
                        </ListItem>



                        <Link href="/">
                            Home
                        </Link>

                        <Link href="/login" passHref>
                            <IconButton component="a" aria-label="account">
                                <AccountCircleIcon />
                                <Typography variant="body1" sx={{ marginLeft: 1 }}>Account Sign In</Typography>
                            </IconButton>
                        </Link>

                        <ListItem>
                            <Typography variant="body1">Return & Orders</Typography>
                        </ListItem>
                        <ListItem>
                            <IconButton aria-label="cart">
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                                <Typography variant="body1" sx={{ marginLeft: 1 }}>Cart</Typography>
                            </IconButton>
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>

            {/* First AppBar End */}


        </div>

    );

};

export default GadgetsNavbar;