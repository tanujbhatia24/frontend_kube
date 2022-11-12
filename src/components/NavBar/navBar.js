import React from "react";
import { Drawer, AppBar, Toolbar, IconButton, Divider } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../SideBar/sideBar";

const navBar = () => {
  const drawerWidth = 280;
  return (
    <>
      <AppBar
        postion='fixed'
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          backgroundColor: "rgb(249, 250, 251)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            marginLeft: "200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav
        style={{
          width: `${drawerWidth}px`,
        }}
      >
        <Drawer
          variant='permanent'
          open
          PaperProps={{
            sx: {
              backgroundColor: "rgb(249, 250, 251)",
              width: `${drawerWidth}px`,
            },
          }}
        >
          <SideBar />
        </Drawer>
      </nav>
    </>
  );
};

export default navBar;
