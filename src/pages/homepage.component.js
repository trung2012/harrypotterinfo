import React from 'react';
import Directory from './directory.component';
import Header from '../components/header.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='homepage'>
        <Directory />
      </div>
      <footer>
        <p>Attributions: wizardingworld.com, potterapi.com, harrypotter.fandom.com </p>
      </footer>
    </>
  );
}

export default HomePage;