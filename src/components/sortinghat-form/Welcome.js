import React from 'react'

import './Welcome.scss';

const WelcomePage = ({ goToNext }) => {
  return (
    <div className='quiz-intro'>
      <section class='quiz-intro-section'>
        <h2 class="quiz-intro-section-title">The Sorting Hat</h2>
      </section>
      <span class="quiz-intro-divider">OR</span>
      <section>
        <h2 class="quiz-intro-section-title">The Sorting Ceremony</h2>
        <h3 class="quiz-intro-section-sub-title">Answer truthfully, after all the hat's decision is final.</h3>
        <button onClick={goToNext} class="quiz-intro-button">Begin the experience</button>
      </section>

    </div>
  );
}

export default WelcomePage;