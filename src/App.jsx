import { useState } from 'react'
import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {

  return (
   <div>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
   </div>
  )
}

export default App
