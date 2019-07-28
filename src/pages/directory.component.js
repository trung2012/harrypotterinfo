import React from 'react';
import MenuItem from '../components/menu-item.component';

import sections from './sections';
import './directory.styles.scss';

const Directory = () => {
  return (
    <div className='directory'>
      {
        sections.map(({ title, imageUrl }) => (
          <MenuItem title={title} imageUrl={imageUrl} />
        ))
      }
    </div>
  )
}

export default Directory;