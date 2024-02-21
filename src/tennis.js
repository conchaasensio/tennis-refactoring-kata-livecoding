'use strict';

function isAdvantageOrWin(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 >= 4 || pointsPlayer2 >= 4;
}

function getScore(pointsPlayer1, pointsPlayer2) {
  let score = '';
  let tempScore = 0;
  if (isTie(pointsPlayer1, pointsPlayer2)) {
    score = getTieScores(pointsPlayer1, score);
  } else if (isAdvantageOrWin(pointsPlayer1, pointsPlayer2)) {
    let minusResult = pointsPlayer1 - pointsPlayer2;
    if (minusResult === 1) {
      score = 'Advantage player1';
    } else if (minusResult === -1) {
      score = 'Advantage player2';
    } else if (minusResult >= 2) {
      score = 'Win for player1';
    } else {
      score = 'Win for player2';
    }
  } else {
    for (let i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = pointsPlayer1;
      } else {
        score += '-';
        tempScore = pointsPlayer2;
      }
      switch (tempScore) {
        case 0:
          score += 'Love';
          break;
        case 1:
          score += 'Fifteen';
          break;
        case 2:
          score += 'Thirty';
          break;
        case 3:
          score += 'Forty';
          break;
      }
    }
  }

  return score;
}

function isTie(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 === pointsPlayer2;
}

function getTieScores(pointsPlayer1, score) {
  switch (pointsPlayer1) {
    case 0:
      score = 'Love-All';
      break;
    case 1:
      score = 'Fifteen-All';
      break;
    case 2:
      score = 'Thirty-All';
      break;
    default:
      score = 'Deuce';
      break;
  }
  return score;
}

export default getScore;
