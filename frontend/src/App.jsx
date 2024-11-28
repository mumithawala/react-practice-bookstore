import React from 'react';
import Home from './home/Home'; 
import Courses from './courses/Courses';
import {Route , Routes} from  "react-router-dom"



function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/courses" element={<Courses/>} />
    </Routes>
 
    </>
  );
}

export default App;
