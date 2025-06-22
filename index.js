let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const puzzles = require('./puzzles.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

function getPuzzleDate(req) {
  if (req && req.query && req.query.date) {
    return req.query.date;
  }
  return process.env.PUZZLE_DATE || new Date().toISOString().slice(0, 10);
}

function getPuzzleByDate(date) {
  return puzzles[date];
}

app.get('/puzzle', (req, res) => {
  const date = getPuzzleDate(req);
  const puzzle = getPuzzleByDate(date);
  if (!puzzle) {
    return res.send('No puzzle for today');
  }
  res.render('puzzle', { puzzle, date });
});

app.post('/submit', (req, res) => {
  const answer = (req.body.answer || '').trim().toLowerCase();
  const date = req.body.date || getPuzzleDate(req);
  const puzzle = getPuzzleByDate(date);
  const correct = puzzle && answer === puzzle.solution.toLowerCase();
  res.render('result', { correct, date });
});

app.get('/api/puzzle', (req, res) => {
  const date = getPuzzleDate(req);
  const puzzle = getPuzzleByDate(date);
  if (!puzzle) {
    return res.status(404).json({ error: 'Puzzle not found' });
  }
  res.json(puzzle);
});

if (require.main === module) {
  app.listen(port);
}

module.exports = app;
