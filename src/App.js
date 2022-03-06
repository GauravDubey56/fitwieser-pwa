import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Container from '@mui/material/Container'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import WorkoutSession from './screens/WorkoutSession';
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
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
