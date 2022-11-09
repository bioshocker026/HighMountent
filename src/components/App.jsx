import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Reg from './Reg';
import Login from './Login';
import MainPage from './MainPage';

export default function App({ user, allUsers }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div className="profilecont">
      <Navbar user={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/reg" element={<Reg setUser={setCurrentUser} />} />
        <Route path="/auth/login" element={<Login setUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}
