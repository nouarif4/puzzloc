
# Haikus for Codespaces

This is a quick node project template for demoing Codespaces. It is based off of the [Azure node sample](https://github.com/Azure-Samples/nodejs-docs-hello-world). It's great!!!

## Emoji Puzzle Demo

Run `npm start` and visit `http://localhost:3000/puzzle` to play a small daily
emoji puzzle. Puzzles are defined in `puzzles.json` keyed by date
(`YYYY-MM-DD`). Submit your answer to see if you solved it correctly.

You can override the puzzle date by setting the `PUZZLE_DATE` environment
variable or by passing a `date` query parameter, e.g. `/puzzle?date=2025-06-23`.
Run `npm test` to perform a basic sanity check on the puzzle data.
