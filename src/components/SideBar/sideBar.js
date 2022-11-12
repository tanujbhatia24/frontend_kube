import { Box } from "@mui/system";
import React from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import avatar from "../../images/avatar_default.png";
import BookIcon from "@mui/icons-material/Book";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "User",
    icon: <AccountBoxIcon />,
  },
  {
    name: "Product",
    icon: <ShoppingCartIcon />,
  },
  {
    name: "Blog",
    icon: <BookIcon />,
  },
  {
    name: "Login",
    icon: <LockOpenIcon />,
  },
  {
    name: "Not Found",
    icon: <DoNotDisturbAltIcon />,
  },
];
const sideBar = () => {
  return (
    <Box>
      {/* Logo */}
      <Box sx={{ padding: "24px 20px" }}>
        <IconButton>
          <LogoDevIcon />
        </IconButton>
      </Box>
      {/* Name and profile avatar */}
      <Box
        sx={{
          mb: "40px",
          ml: "20px",
          mr: "20px",
          display: "flex",
          alignItems: "center",
          padding: "16px 20px",
          borderRadius: "10px",
          backgroundColor: "rgba(145, 158, 171, 0.25)",
          width: "70%",
        }}
      >
        <Avatar
          alt='User'
          src={avatar}
          sx={{ width: "40px", height: "40px" }}
        />
        <Typography
          variant='h6'
          sx={{ ml: "16px", fontSize: "0.875rem", fontWeight: "600" }}
        >
          Suprabha
        </Typography>
      </Box>

      {/* Navigation items */}
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Upgrade */}
      <Box textAlign='center'>
        <Button variant='contained'>Upgrade</Button>
      </Box>
    </Box>
  );
};

export default sideBar;
