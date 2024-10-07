import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero_1';
import Heros from './Hero_2';
import Herot from './Hero_3'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
