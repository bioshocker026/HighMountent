import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Reg from './Reg';
import Login from './Login';
import MainPage from './MainPage';
<<<<<<< HEAD
import Checkbox from './Checkbox';
import AllUsers from './AllUsers';
=======
import AllCards from './AllCards';
import AllUsers from './AllUsers';
import AddCheckbox from './AddCheckbox';
>>>>>>> master

export default function App({ user, allUsers, checkboxes }) {
  // console.log(user);
  const [currentUser, setCurrentUser] = useState(user || null);
  const [allUs, setAllUs] = useState(allUsers || null);
  // console.log(allUsers);
  return (
    <div className="profilecont">
      <Navbar user={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/reg" element={<Reg setUser={setCurrentUser} />} />
        <Route path="/auth/login" element={<Login setUser={setCurrentUser} />} />
        <Route path="/allcards" element={<AllCards checkboxes={checkboxes} />} />
        <Route path="/users" element={<AllUsers allUsers={allUs} />} />
        <Route path="/newcheckbox" element={<AddCheckbox user={currentUser} />} />
      </Routes>
    </div>
  );
}
