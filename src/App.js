import './App.css';
import Casa from './components/pages/client/home/Casa';
import About from './components/pages/client/about/About';
import Meet from './components/pages/client/meet/Meet';
import Forum from './components/pages/client/forum/Forum';
import Contact from './components/pages/client/contact/Contact';
import Adminforum from './components/pages/admin/admin-forum/Adminforum';
import Adminhome from './components/pages/admin/admin-home/Adminhome';
import AdminAbout from './components/pages/admin/admin-about/AdminAbout';
import AccountCreation from './components/pages/admin/admin-account/AccountCreation';
import DiscSymph from './components/pages/client/forum/discussion/DiscSymph/DiscSymph';
import DiscMarket from './components/pages/client/forum/discussion/disc-market/DiscMarket';
import DiscCornhole from './components/pages/client/forum/discussion/disc-cornhole/DiscCornhole';
import DiscHappy from './components/pages/client/forum/discussion/disc-happy/DiscHappy';
import Login from './components/pages/client/login/Login';

import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserCalendar from './components/pages/client/calendar/UserCalendar';
import AdminCalendar from './components/pages/admin/admin-calendar/AdminCalendar';

function App() {
  const [role, setRole] = useState(localStorage.getItem('userRole') || '');




  useEffect(() => {
    const storedRole = JSON.parse(localStorage.getItem('user'));
    if (storedRole) {
      const role = storedRole[0].role;
      setRole(role);
      console.log('Role from local storage:', role);
    }
  }, []);

  return (
    <div className="App">
      {/* <ClientNavbar /> */}
      <Routes>
        <Route path="/" element={<Casa />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/DiscSymph" element={<DiscSymph />} />
        <Route path="/DiscMarket" element={<DiscMarket />} />
        <Route path="/DiscCornhole" element={<DiscCornhole />} />
        <Route path="/DiscHappy" element={<DiscHappy />} />
        <Route path='/login' element={<Login />}/>
        <Route path="/AccountCreation" element={<AccountCreation />} />

        {role === 'user' && (
          <>
            <Route path="/forum" element={<Forum />} />
            <Route path="/calendar" element={<UserCalendar />} />
          </>
        )}

        {role === 'admin' && (
          <>
            <Route path="/adminforum" element={<Adminforum />} />
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/admincalendar" element={<AdminCalendar />} />
            <Route path="/adminabout" element={<AdminAbout />} />
          </>
        )}

        {!role && (
          <>
            <Route path="/forum" element={<Forum />} />
            <Route path="/calendar" element={<UserCalendar />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
