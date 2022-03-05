import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Container from '@mui/material/Container'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import SplashScreen from './screens/SplashScreen'
import Header from './components/Header'
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
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
