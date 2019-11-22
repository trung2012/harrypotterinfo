import React from 'react';

import './spell-watch.styles.scss';

const SpellWatch = ({ imageUrl, setWatching }) => {
  return (
    <>
      <div className='overlay' onClick={() => setWatching(false)} />
      <img
        src={imageUrl}
        alt='profile-pic'
        className='spell-watch'
      />
    </>
  );
}

export default SpellWatch;