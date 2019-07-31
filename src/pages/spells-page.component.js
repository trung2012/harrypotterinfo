import React from 'react';
import SpellsOverview from '../components/spells-overview.component';
import Header from '../components/header.component';

const SpellsPage = () => {
  return (
    <div className='spells-page'>
      <Header />
      <SpellsOverview />
    </div>
  );
}

export default SpellsPage;