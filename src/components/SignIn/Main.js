import React from 'react'
import { Grid } from '@mui/material';
import Login from './Login';
import LoginImage from './LoginImage';

const Main = () => {
  return (
    <Grid container>
        <Grid item xs={12} sm={6}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
            <LoginImage />
        </Grid>
        <Grid item xs={12} sm={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
            <Login />
        </Grid>

    </Grid>
  )
}

export default Main