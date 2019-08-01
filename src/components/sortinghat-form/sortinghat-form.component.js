import React from 'react';

import Question from './Question';
import WelcomePage from './Welcome';
import ResultPage from './ResultPage';

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

class SortingHatForm extends React.Component {
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
    switch (this.state.current_question) {
      case 1:
        return <Question
          question_number={1}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 2:
        return <Question
          question_number={2}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 3:
        return <Question
          question_number={3}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 4:
        return <Question
          question_number={4}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 5:
        return <Question
          question_number={5}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 6:
        return <Question
          question_number={6}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 7:
        return <Question
          question_number={7}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
        />
      case 8:
        return <Question
          question_number={8}
          goToNext={this.goToNext}
          addPointsToHouse={this.addPointsToHouse}
          sortToHouse={this.sortToHouse}
        />
      case 9:
        return <ResultPage
          houseName={this.state.sortResult}
          reset={this.reset}
        />
      default:
        return <WelcomePage
          goToNext={this.goToNext}
        />
    }
  }
}

export default SortingHatForm;