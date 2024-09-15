'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaUserEdit } from 'react-icons/fa';
import Image from 'next/image';

const GadgetsNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <div className=' w-full'>
            {/* AppBar Start */}
            <AppBar position="static" sx={{ backgroundColor: 'rgb(8 47 73)', }} className='shadow-md'>
                <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {/* Logo and Title */}
                    <Link href="/travel-gadgets">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/logo.webp"
                                alt="Trek Explore Travel Logo"
                                width={100}
                                height={30}
                                style={{ maxWidth: '100px', maxHeight: '40px' }}
                                className="logo"
                            />
                            <Typography variant="h6" sx={{ display: { md: 'block' } }} className="font-bold text-white">Trek Explore Travel</Typography>
                        </div>
                    </Link>

                    {/* Desktop Search Bar */}
                    <Box sx={{ flexGrow: 1, maxWidth: '50%', display: { xs: 'none', md: 'flex' }, mx: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'white',
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

                    {/* Mobile Menu Button */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Desktop Navbar Items */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', }}>
                        <Link href='/' className='text-sm text-white hover:underline'>
                            Home
                        </Link>
                        <span className="text-xs text-white mx-2">|</span>
                        <Link href='/contactus' className='text-sm text-white hover:underline'>
                            Support
                        </Link>
                        <span className="text-xs text-white mx-2">|</span>
                        <Typography variant="body1" className='text-sm text-white'>
                            About Us
                        </Typography>
                        <span className="text-xs text-white mx-2">|</span>
                        <Link href='/' className='text-sm text-white hover:underline'>
                            Tracking Order
                        </Link>
                        <span className="text-xs text-white mx-2">|</span>
                        <Link href='/login' className='text-sm text-white flex items-center gap-1 hover:underline'>

                            <Typography variant="body1">
                                Sign In
                            </Typography>
                        </Link>
                        <span className="text-xs text-white mx-2">|</span>
                        <IconButton aria-label="cart" sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                            <Typography variant="body1" className='text-sm text-white'>
                                Cart
                            </Typography>
                        </IconButton>
                    </Box>
                </Toolbar>

                {/* Mobile Drawer */}
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
                        <ListItem>
                            <Link href="/" className='text-sm text-gray-800 hover:underline'>
                                Home
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/login" className='text-sm text-gray-800 flex items-center gap-1 hover:underline'>

                                <Typography variant="body1">
                                    Account Sign In
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" className='text-sm text-gray-800'>
                                Return & Orders
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Link href='/login' className='text-sm text-gray-800 flex items-center gap-1 hover:underline'>

                                <Typography variant="body1">
                                    Sign In
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <IconButton aria-label="cart" sx={{ display: 'flex', }}>

                                <Typography variant="body1" className='text-sm text-gray-800'>
                                    Cart
                                </Typography>
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
            {/* AppBar End */}
        </div>
    );
};

export default GadgetsNavbar;
