const puzzles = require('./puzzles.json');

if (!Object.keys(puzzles).length) {
  throw new Error('No puzzles defined');
}

for (const [date, puzzle] of Object.entries(puzzles)) {
  if (!Array.isArray(puzzle.emojis) || typeof puzzle.hint !== 'string' || typeof puzzle.solution !== 'string') {
    throw new Error(`Invalid puzzle format for ${date}`);
  }
}

console.log('All tests passed');
