import React from 'react';

import quiz_questions from '../../utils/quiz_questions';
import './Question.scss';



const Question = ({ question_number, goToNext, addPointsToHouse }) => {

  const onAnswerSelect = (houseScores) => {
    addPointsToHouse(houseScores);
    goToNext();
  }

  const questions = quiz_questions.filter(question_container => question_container.question_number === question_number);
  const displayQuestion = questions[Math.floor(Math.random() * questions.length)];
  const { question, answers, background, middleground, foreground } = displayQuestion;
  return (
    <div className='question-and-answers-container'>
      <div className='question-container'>
        <div className='question-illustration-container'>
          <div className='question-illustration-background' style={{ backgroundImage: `url('${background}')` }}></div>
          <div className='question-illustration-middleground' style={{ backgroundImage: `url('${middleground}')` }}></div>
          <div className='question-illustration-foreground' style={{ backgroundImage: `url('${foreground}')` }}></div>
          <div className='question-content'>
            <p className='question-text'>{question}</p>
          </div>
        </div>

      </div>
      <div className='answers-container' style={{ backgroundColor: '#320a6b' }}>
        {
          answers.map(answer => (
            <div onClick={() => onAnswerSelect(answer.houseScores)} className='answer'>{answer.text}</div>
          ))
        }
      </div>
    </div>
  );
}

export default Question;