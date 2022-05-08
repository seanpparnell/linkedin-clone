import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Navbar from './components/shared/Navbar.js';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Login from './components/login/Login';

const App = () => {
  const user = useSelector(selectUser)

  return(
    <>
    <div className="app">
      <Navbar />
        { !user ? (
          <Login />
        ) : (
        <div class="app__body">
          <Sidebar />
          <Feed />
          {/* <Widgets /> */}
        </div>
        )} 
    </div>
    </>
  );
}

export default App;
