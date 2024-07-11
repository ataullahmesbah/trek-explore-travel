'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Container,
    Grid,
    Box,
    useMediaQuery,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import gadgetsData from '/public/gadgets.json'; // Adjust the path accordingly




import { useTheme } from '@mui/material/styles';
import CategoryList from '../../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';


const categories = ["All Gadgets", "Backpack", "Apparel", "Climbing Gear", "Hammock", "Sleeping Bag", "Electronics", "Tents", "Water Sports", "Cooking", "Tools & Kit", "Running", "Others Products"];

const GadgetsHome = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Gadgets');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDrawerOpen(false);
    };

    return (
        <div>
            {/* E-commerce Navbar */}
           

            {/* Second AppBar Start */}
            <AppBar position="static" sx={{ backgroundColor: 'rgb(12 74 110)' }}>
               
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        {!isMobile && (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                <CategoryList categories={categories} handleCategoryClick={handleCategoryClick} />
                            </Box>
                        )}
                    </Toolbar>
      
            </AppBar>
            {/* Second AppBar End */}

            {/* Drawer */}
            <Drawer anchor="left"  open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {categories.map((category) => (
                        <ListItem button sx={{paddingRight: '50px', marginTop: '20px'}} key={category} onClick={() => handleCategoryClick(category)}>
                            <ListItemText primary={category} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/* Drawer End */}

            {/* Drawer */}
            {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                
            </Drawer> */}
            {/* Drawer End */}



            {/* Main Content */}
            <Container maxWidth="lg">
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        <ProductList category={selectedCategory} products={gadgetsData} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default GadgetsHome;
