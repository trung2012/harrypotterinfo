import React from 'react';
import themeSong from '../assets/theme.mp3'
import './welcome.styles.scss';

const WelcomePage = ({ history }) => {
  return (
    <div className='welcome-page-container'>
      <div className='welcome-page'>
        <div onClick={() => history.push('/home')} className="go-to-homepage">Get started</div>
      </div>
      <audio src={themeSong} preload='auto' autoPlay />
    </div>
  );
}

export default WelcomePage;