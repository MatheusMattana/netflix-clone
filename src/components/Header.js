import React from 'react';
import './Header.css';

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
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="profile-icon"
        />
      </a>
    </header>
  );
};

export default Header;
