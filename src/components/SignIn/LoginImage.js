import { Card, CardMedia } from '@mui/material'
import React from 'react'
import loginImage from "../assets/loginImage1.png"

const LoginImage = () => {
  return (
    <Card fullwidth sx={{height: '600px'}}>
        <CardMedia 
            component='img'
            height='500'
            image={loginImage}
            alt='Login-image'
        />
    </Card>
  )
}

export default LoginImage