import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage/homepage';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
