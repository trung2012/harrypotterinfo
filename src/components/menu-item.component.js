import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, pathUrl, history }) => {
  return (
    <div className='menu-item' onClick={() => history.push(`/${pathUrl}`)}>
      <div className='menu-item-image-container'>
        <img alt='section' src={imageUrl} className='menu-item-image' />
        <div className='title'>{title}</div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);