import React from 'react';

import Question from './Question';

class SortingHatForm extends React.Component {
  state = {
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
      name: '',
      score: 0
    },
    sortResult: ''
  }

  goToNext = () => {
    this.setState(state => ({ current_question: state.current_question + 1 }));
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
    let sortResults = [gryffindor.score, ravenclaw.score, slytherin.score, hufflepuff.score].filter(house => house.score === maxVal);
    if (sortResults.length > 1) {
      gryffindor.score += 3;
      ravenclaw.score += 2;
      hufflepuff.score += 1;

      maxVal = Math.max(gryffindor.score, ravenclaw.score, slytherin.score, hufflepuff.score);
      sortResults = [gryffindor.score, ravenclaw.score, slytherin.score, hufflepuff.score].filter(house => house.score === maxVal);
    }
    this.setState({ sortResult: sortResults[0].name });
  }

  render() {
    return <Question
      question_number={1}
      goToNext={this.goToNext}
      addPointsToHouse={this.addPointsToHouse}
    />
  }
}

export default SortingHatForm;