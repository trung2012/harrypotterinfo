import React from 'react';
import MenuItem from '../components/menu-item.component';

import sections from '../utils/sections';
import './directory.styles.scss';

const Directory = () => {
  return (
    <div className='directory'>
      {
        sections.map(({ title, imageUrl, pathUrl }) => (
          <MenuItem key={title} title={title} imageUrl={imageUrl} pathUrl={pathUrl} />
        ))
      }
    </div>
  )
}

export default Directory;