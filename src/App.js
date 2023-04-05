import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage/homepage';
import Dashboard from './component/Dashboard/Dashboard';
import Login from './component/Login/Login';
import SubPage from './component/SubPage/SubPage';
import Register from './component/Register/Register';
import Members from './component/Members/Members';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/subpage" element={<SubPage />}></Route>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
