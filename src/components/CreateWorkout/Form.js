import * as React from 'react';
import {useState, useContext} from 'react'

import { Box, Button, CssBaseline, Typography, Container, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import  {UserContext}from "../../context";
import {useNavigate} from 'react-router-dom';
import AddExercise from './AddExercise'
const theme = createTheme();

export default function AddSession() {
  const [isLoading, setIsLoading] = useState(false);
  const [num, setNum] = useState(1);
  const formChildren = [];
  for(var i = 0; i < num; i++){
    formChildren.push(<AddExercise key={i}/>)
  }
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    console.log({
      name : data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
    });
  };
  return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
               New Workout
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <div id="form-group">
            {formChildren}
            </div>
            <Button onClick= {() => {setNum(num+1)}}>Add</Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>


  );
}
