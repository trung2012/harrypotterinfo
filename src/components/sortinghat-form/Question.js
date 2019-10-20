import React, { useEffect } from 'react';

import uuid from 'uuid/v4';
import './Question.scss';



const Question = ({ question_number, goToNext, addPointsToHouse, sortToHouse, quiz_questions, quizType }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const onAnswerSelect = (houseScores) => {
    addPointsToHouse(houseScores);
    if (quizType === 'normal' && question_number === 8) sortToHouse();
    if (quizType === 'full' && question_number === 28) sortToHouse();
    goToNext();
  }

  const questions = quiz_questions.filter(question_container => question_container.question_number === question_number);
  const displayQuestion = questions[Math.floor(Math.random() * questions.length)];
  const { question, answers, background, middleground, foreground, backgroundColor, } = displayQuestion;
  return (
    <div className='question-and-answers-container'>
      <div className='question-container'>
        <div className='question-illustration-container'>
          <div className='question-illustration-background' style={{ backgroundImage: `url(${background.url})`, animation: `${background.animation ? `${background.animation} 3s ease-in-out forwards` : 'none'} ` }}></div>
          <div className='question-illustration-middleground' style={{ backgroundImage: `url('${middleground.url}')`, animation: `${middleground.animation ? `${middleground.animation} 3s ease-in-out forwards` : 'none'} ` }}></div>
          <div className='question-illustration-foreground' style={{ backgroundImage: `url('${foreground.url}')`, animation: `${foreground.animation ? `${foreground.animation} 3s ease-in-out forwards` : 'none'} ` }}></div>
          <div className='question-content'>
            <p className='question-text'>{question}</p>
          </div>
        </div>

      </div>
      <div className='answers-container' style={{ backgroundColor: `${backgroundColor}` }}>
        <div className='answers'>
          {
            answers.map(answer => (
              <div key={uuid()} className='answer'>
                <p onClick={() => onAnswerSelect(answer.houseScores)}>{answer.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Question;