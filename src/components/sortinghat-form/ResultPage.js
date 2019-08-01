import React from 'react';
import { withRouter } from 'react-router-dom';
import { generateHouseColor } from '../../utils/helper';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import share from '../../assets/share.png';

import './ResultPage.scss';

const ResultPage = ({ houseName, reset, history }) => {
  const houseColor = generateHouseColor(houseName);

  return (
    <div className='result-page' style={{ backgroundColor: `${houseColor}` }}>
      <div className='result-container'>
        <div className='result-page-result'>
          <h2 className='result-page-house-name'>{houseName}</h2>
          <p>Congratulations on being sorted into {houseName}</p>
        </div>
        <div className='result-page-share'>
          <h2 className='result-page-share-social-title'>Share your house</h2>
          <div className='result-page-share-social'>
            <i><img alt='facebook-share' src={facebook} /></i>
            <i><img alt='twitter-share' src={twitter} /></i>
            <i><img alt='linkedin-share' src={linkedin} /></i>
            <i><img alt='link-share' src={share} /></i>
          </div>
        </div>
        <div className='result-page-next-step'>
          <button onClick={reset} className="result-page-button">Try another one</button>
          <button onClick={() => history.push('/')} className="result-page-button">Home</button>
        </div>

      </div>
    </div>
  );
}

export default withRouter(ResultPage);