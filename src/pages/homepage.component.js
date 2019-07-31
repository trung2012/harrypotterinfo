import React from 'react';
import Directory from './directory.component';
import Header from '../components/header.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <Directory />
    </div>
  );
}

export default HomePage;