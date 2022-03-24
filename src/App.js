import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import {Container} from '@mui/material'
import {SignIn, SignUp } from './Auth'
import {SplashScreen, HomeScreen, WorkoutSession, NewSession} from './screens'
import {Header} from './components'
function App() {
  return (
    <Router>
      <main className="py-3">
      <Header />
        <Container>
        
          <Routes>
            <Route exact path = '/' element = {<SplashScreen />}/>
            <Route path='/login' element={<SignIn />} exact />
            <Route path='/signup' element={<SignUp />} exact />
            <Route path='/home' element={<HomeScreen />} exact />
            <Route path='/workout' element={<WorkoutSession/>} exact />
            <Route path='/new' element={<NewSession/>} exact/>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
