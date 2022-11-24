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
import profileImage from "../../images/avatar_default.png";
import userImage from "../../images/illustration_avatar.png";
import BookIcon from "@mui/icons-material/Book";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    name: "User",
    icon: <AccountBoxIcon />,
    path: "/users",
  },
  {
    name: "Product",
    icon: <ShoppingCartIcon />,
    path: "/product",
  },
  {
    name: "Blog",
    icon: <BookIcon />,
    path: "/blog",
  },
  {
    name: "Login",
    icon: <LockOpenIcon />,
    path: "/login",
  },
  {
    name: "Not Found",
    icon: <DoNotDisturbAltIcon />,
    path: "/404",
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
          width: "80%",
        }}
      >
        <Avatar
          alt='User'
          src={profileImage}
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
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Upgrade */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt='User'
          src={userImage}
          sx={{ width: "80px", height: "80px", mt: 5, mb: 2 }}
        />
        <Typography variant='h6' gutterBottom>
          Get more?
        </Typography>
        <Typography gutterBottom>From only $69</Typography>

        <Button
          variant='contained'
          sx={{ textTransform: "none", fontWeight: "700", mt: 2 }}
        >
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  );
};

export default sideBar;

//
