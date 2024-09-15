
// Initialize game state
let currentPlayer = 1;
let diceValue = 0;

// Add event listeners
document.getElementById('roll-dice').addEventListener('click', rollDice);
document.querySelectorAll('.token').forEach(token => {
  token.addEventListener('click', moveToken);
});

// Roll dice function
function rollDice() {
  diceValue = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-display').textContent = `Dice: ${diceValue}`;
}

// Move token function
function moveToken() {
  // Calculate new token position based on dice value
  const token = this;
  const newPosition = (token.dataset.position + diceValue) % 16;
  token.dataset.position = newPosition;
  token.style.gridArea = `square-${newPosition}`;
}
