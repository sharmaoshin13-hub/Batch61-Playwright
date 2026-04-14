function createScoreTracker(playerName) {
  let score = 0; // private variable

  return {
    addPoints: function(points) {
      score += points;
      console.log(`${playerName} gained ${points} points.`);
    },
    deductPoints: function(points) {
      score -= points;
      console.log(`${playerName} lost ${points} points.`);
    },
    getScore: function() {
      console.log(`Score of ${playerName}: ${score}`);
      return score;
    }
  };
}

// Example usage
const player1 = createScoreTracker("Alice");
player1.addPoints(10);   // Alice gained 10 points.
player1.getScore();      // Score of Alice: 10
player1.deductPoints(3); // Alice lost 3 points.
