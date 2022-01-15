import React from "react";

import { Route, Routes } from "react-router-dom";

import SignIn from './login/SignIn';
import Dashboard from './dashboard/Dashboard';
import App from './App';

const MainApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoice" element={<App />} />
      </Routes>
    </div>
  );
};

export default MainApp;