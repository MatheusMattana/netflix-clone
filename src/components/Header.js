import React from 'react';
import './Header.css';

import profileIcon from '../assets/profile-icon.png';

const Header = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <a className="header--logo" href="/">
        <img
          src={require('../assets/NETFLIXCLONE.png')}
          alt="netflix clone logo"
        />
      </a>
      <a className="header--profilepic" href="/">
        <img src={profileIcon} alt="profile-icon" />
      </a>
    </header>
  );
};

export default Header;
