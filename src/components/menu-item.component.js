import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className='menu-item'>
      <div className='menu-item-image-container'>
        <img alt='section' src={imageUrl} className='menu-item-image' />
        <div className='title'>{title}</div>
      </div>
    </div>
  );
}

export default MenuItem;