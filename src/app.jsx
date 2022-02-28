import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/page/login/login';
import Signup from './components/page/signup/signup';
import UserInformation from './components/page/userInformation/userInformation';

function App({user}) {

  return (
  <div className={styles.app}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login user={user}/>} />
        <Route path="/signup" element={<Signup user={user}/>} />
        <Route path="/userInformation" element={<UserInformation />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
