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
      {/* <PlaceList /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/tour' element={<PlaceList />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
