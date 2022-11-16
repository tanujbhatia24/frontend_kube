import { Card, CardContent, Typography, Container, Icon } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import AppleIcon from "@mui/icons-material/Apple";
import WindowIcon from "@mui/icons-material/Window";
import AdbIcon from "@mui/icons-material/Adb";
import BugReportIcon from "@mui/icons-material/BugReport";
import { getDashboardData } from "../../api/queries";

// const dashBoardData = [
//   {
//     name: "Weekly Sales",
//     value: "714k",
//     color: "rgb(209, 233, 252)",
//     icon: <AdbIcon />,
//   },
//   {
//     name: "New Users",
//     value: "1.35m",
//     color: "rgb(208, 242, 255)",
//     icon: <AppleIcon />,
//   },
//   {
//     name: "Item Orders",
//     value: "1.72m",
//     color: "rgb(255, 247, 205)",
//     icon: <WindowIcon />,
//   },
//   {
//     name: "Bug Reports",
//     value: "234",
//     color: "rgb(255, 231, 217)",
//     icon: <BugReportIcon />,
//   },
// ];

const AdminDashboard = () => {
  const [dashBoardData, setDashboardData] = useState([]);

  useEffect(() => {
    getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  function getIcon(type) {
    let icon;
    switch (type) {
      case "Weekly Sales":
        icon = <AdbIcon />;
        break;
      case "New Users":
        icon = <AppleIcon />;
        break;
      case "Item Orders":
        icon = <WindowIcon />;
        break;
      case "Bug Reports":
        icon = <AdbIcon />;
        break;
      default:
        icon = <BugReportIcon />;
    }
    return icon;
  }

  return (
    <Box>
      <Container maxWidth='sm' style={{ marginTop: "50px" }}>
        <Typography variant='h4' gutterBottom>
          Hi, Welcome back
        </Typography>
      </Container>

      <Box
        sx={{
          display: "flex",
        }}
      >
        {dashBoardData?.map((d) => {
          return (
            <Card
              key={d.name}
              sx={{
                minWidth: 200,
                margin: "10px",
                padding: "24px",
                backgroundColor: d.color,
              }}
            >
              <CardContent sx={{ alignItems: "center" }}>
                <IconButton>{getIcon(d.name)}</IconButton>
                <Typography variant='h3' gutterBottom>
                  {d.value}
                </Typography>
                <Typography variant='h6' gutterBottom>
                  {d.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
