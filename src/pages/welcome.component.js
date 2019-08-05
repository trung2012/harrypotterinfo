import React from 'react';

import './welcome.styles.scss';

const WelcomePage = ({ history }) => {
  return (
    <div className='welcome-page'>
      <div onClick={() => history.push('/home')} className="go-to-homepage">Get started</div>
    </div>
  );
}

export default WelcomePage;