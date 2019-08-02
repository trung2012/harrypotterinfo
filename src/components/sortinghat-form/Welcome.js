import React from 'react'
import { withRouter } from 'react-router-dom';

import './Welcome.scss';

const WelcomePage = ({ goToNext, history }) => {
  return (
    <div className='quiz-intro'>
      <section className='quiz-intro-section'>
        <h2 className="quiz-intro-section-title">The Sorting Hat</h2>
      </section>
      <span className="quiz-intro-divider">OR</span>
      <section className='quiz-intro-section'>
        <h2 className="quiz-intro-section-title">The Sorting Ceremony</h2>
        <h3 className="quiz-intro-section-sub-title">Answer truthfully, after all the hat's decision is final.</h3>
        <button onClick={goToNext} className="quiz-intro-button">Begin the experience</button>
        <button onClick={() => history.push('/')} className="quiz-intro-button">Back to home</button>
      </section>

    </div>
  );
}

export default withRouter(WelcomePage);