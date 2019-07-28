import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <div className='options'>
        <Link to='/sortinghat' className='options-item'>Sorting Hat</Link>
        <Link to='/houses' className='options-item'>Houses</Link>
        <Link to='/characters' className='options-item'>Characters</Link>
        <Link to='/spells' className='options-item'>Spells</Link>
      </div>
    </div>
  );
}

export default Header;