import React,{useEffect,useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { getStudentDashboardData } from "../../api/queries";
export default function StudentCard() {
    const [dashBoardData, setDashboardData] = useState([]);

    useEffect(() => {
      getStudentDashboardData().then((data) => {
        setDashboardData(data);
      });
    }, []);
    return (
        <>
            <Container
                maxWidth='sm'
                style={{ marginTop: "50px", alignItems: "left" }}
            >
                <Typography variant='h4' gutterBottom>
                    Hi Student ,Track your progress:
                </Typography>
            </Container>

            <Grid container sx={{ marginBottom: "20px" }}>
                {dashBoardData?.map((d) => {
                    return (
                        <Grid key={d.id}>
                            <Card
                                sx={{
                                    minWidth: 600,
                                    margin: "5px",
                                    padding: "5px",
                                    backgroundColor: d.color,
                                }}
                            >
                                <CardContent sx={{ alignItems: "center" }}>
                                    <span style={{ display: "flex", }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        <div style={{ marginLeft: "10px", fontWeight: "bold", display: "flex", alignItems: "center" }}>{d.name}</div>
                                    </span>

                                    <Typography variant="h6">
                                        Batch :{d.batch}
                                    </Typography>

                                    <Typography variant="h6">
                                        Enrolled Date:{d.enrolled}
                                    </Typography>
                                    <Typography variant="h6">
                                        Program Name:{d.course_name}
                                    </Typography>


                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    )
}
