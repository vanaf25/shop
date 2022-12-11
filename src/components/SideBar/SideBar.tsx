import React from 'react';
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import { useGetCategoryQuery } from '../../store/api/categoryApi';
import {Link} from "react-router-dom";
const drawerWidth = 240;
const SideBar = () => {
    const {isLoading,data}=useGetCategoryQuery()
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' ,zIndex:1},
            }}
        >
            <Toolbar />
            <Box sx={{overflow: 'auto' }}>
                <List>
                    {!isLoading && data ? data.map((item, index) => (
                        <Link key={item.id} to={`/${item.name}`}>
                            <ListItem  disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                           )):""}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
};

export default SideBar;
