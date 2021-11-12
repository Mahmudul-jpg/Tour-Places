import React from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import PlaceList from './components/placeList/PlaceList'
import { Routes, Route } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tour' element={<PlaceList />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
