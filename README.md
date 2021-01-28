Skeleton of a *very* simple [TCR][tcr] (`test && commit || revert`) setup.

Each time the script is run, if all tests succeed we commit all changes.

If tests fail, we revert any production code changes (but not tests) since the last commit.

## The process

1. Write a test
2. `./tcr` to confirm the test fails
3. Write enough just enough code to pass the test
4. `./tcr` to get to green and commit (or revert, and go back to step 1, if we fail)
5. Write "real" code if needed to pass the tests honestly
6. `./tcr` to get to green and commit (or revert, and go back to step 1, if we fail)
7. Repeat

## The exercise - Magic Square

Write a function to validate 3x3 magic squares.  A magic square is one where all rows, all columns, and both diagonals sum to the same total. For 3x3 magic squares containing the digits 1-9, that total will be 15 in all directions.

### Input

A 3x3 array of integers:

```js
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
```

(the above is *not* a valid matching square; for example, the first row sums to 6 while the last sums to 24)

### Output

`true` if the magic square is valid, `false` otherwise.

### Tests

1. Size must be 3x3
2. All digits 1-9 must be present
3. Each row sums to 15
4. Each column sums to 15
5. Each diagonal (top left + center + bottom right, top right + center + bottom left) sums to 15

### Sample valid magic squares:

```js
[
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]
```

```js
[
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
]
```

## Preliminaries

Install the [entr][entr] utility from Homebrew, by running `brew install entr`.

Run `npm install` in this folder to install needed node dependencies.

[tcr]: https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864 "Kent Beck: test && commit || revert"
[entr]: https://github.com/eradman/entr "Event Notify Test Runner"
