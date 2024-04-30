import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Flat from './pages/flats';
import Navbar from './components/navbar';
import Test from './pages/test';
import Admin from './pages/admin';
import FlatDetails from './pages/Auth'

// Create the IsLoggedInContext with an initial value of false
const IsLoggedInContext = createContext(false);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route
            path="/flatDetails/:flatno"
            element={
              <IsLoggedInContext.Consumer>
                {({ isLoggedIn }) => (isLoggedIn ? <Flat /> : <p>Login Required!</p>)}
              </IsLoggedInContext.Consumer>
            }
          />
           <Route
            path="/adminLogin"
            element={
              <IsLoggedInContext.Consumer>
                {({ isLoggedIn }) => (isLoggedIn ? <Admin /> : <p>Login Required!</p>)}
              </IsLoggedInContext.Consumer>
            }
          />
          <Route path="/home" element={<Admin />} />
          <Route path="/flats/:flatNo" element={<FlatDetails />} />
        </Routes>
      </div>
    </IsLoggedInContext.Provider>
  );
}

export default App;
export { IsLoggedInContext };