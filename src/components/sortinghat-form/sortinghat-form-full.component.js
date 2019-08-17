import React from 'react';

import Question from './Question';
import WelcomePage from './Welcome';
import ResultPage from './ResultPage';
import quiz_questions from '../../utils/quiz_questions_full';

const initialState = {
  current_question: 0,
  gryffindor: {
    name: 'Gryffindor',
    score: 0
  },
  ravenclaw: {
    name: 'Ravenclaw',
    score: 0
  },
  slytherin: {
    name: 'Slytherin',
    score: 0
  },
  hufflepuff: {
    name: 'Hufflepuff',
    score: 0
  },
  sortResult: ''
}

class SortingHatFullForm extends React.Component {
  state = initialState;

  goToNext = () => {
    this.setState(state => ({ current_question: state.current_question + 1 }));
  }

  reset = () => {
    this.setState(initialState);
  }

  addPointsToHouse = (houseScores) => {
    this.setState(state => ({
      gryffindor: { ...state.gryffindor, score: state.gryffindor.score + houseScores.gryffindor },
      ravenclaw: { ...state.ravenclaw, score: state.ravenclaw.score + houseScores.ravenclaw },
      slytherin: { ...state.slytherin, score: state.slytherin.score + houseScores.slytherin },
      hufflepuff: { ...state.hufflepuff, score: state.hufflepuff.score + houseScores.hufflepuff }
    }));
  }

  sortToHouse = () => {
    const { gryffindor, ravenclaw, slytherin, hufflepuff } = this.state;
    let maxVal = Math.max(gryffindor.score, ravenclaw.score, slytherin.score, hufflepuff.score);
    let sortResults = [gryffindor, ravenclaw, slytherin, hufflepuff].filter(house => house.score === maxVal);
    if (sortResults.length > 1) {
      gryffindor.score += 3;
      ravenclaw.score += 2;
      hufflepuff.score += 1;

      maxVal = Math.max(gryffindor.score, ravenclaw.score, slytherin.score, hufflepuff.score);
      sortResults = [gryffindor, ravenclaw.score, slytherin, hufflepuff].filter(house => house.score === maxVal);
    }

    this.setState({ sortResult: sortResults[0].name });
  }

  render() {
    const { current_question } = this.state;
    if (current_question === 0) return <WelcomePage goToNext={this.goToNext} quizType='full' />;
    if (current_question > 28) return <ResultPage houseName={this.state.sortResult} reset={this.reset} />;
    return <Question
      question_number={current_question}
      goToNext={this.goToNext}
      addPointsToHouse={this.addPointsToHouse}
      quiz_questions={quiz_questions}
      sortToHouse={this.sortToHouse}
      quizType='full'
    />
  }
}

export default SortingHatFullForm;