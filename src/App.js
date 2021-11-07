import React from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import PlaceList from './components/placeList/PlaceList'
function App() {
  return (
    <div className="App">
      <Navbar />
      <PlaceList />
    </div>
  );
}

export default App;
