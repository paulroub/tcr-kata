const magicsquare = require('./magicsquare');

test('fail on 0 rows', () => {
    expect(magicsquare.correctRowCount([])).toBe(false);
});

test('succeed with 3 rows', () => {
    expect(magicsquare.correctRowCount([1,1,1])).toBe(true);
});

test('fail on 0 columns in a row', () => {
    expect(magicsquare.correctColumnCount([])).toBe(false);
});

test('succeed on 3 columns in a row', () => {
    expect(magicsquare.correctColumnCount([1,2,3])).toBe(true);
});

test('fail on 3x2 grid', () => {
    const grid = [
        [1,2],
        [1,2],
        [1,2]
    ];

    expect(magicsquare.correctDimensions(grid)).toBe(false);
});

test('fail on 2x3 grid', () => {
    const grid = [
        [1,2,3],
        [1,2,3]
    ];

    expect(magicsquare.correctDimensions(grid)).toBe(false);
});

test('succeed on 3x3 grid', () => {
    const grid = [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ];

    expect(magicsquare.correctDimensions(grid)).toBe(true);
});

test('fail with not all digits present', () => {
    const grid = [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ];

    expect(magicsquare.correctContents(grid)).toBe(false);
});

test('succeed with not all digits present', () => {
    const grid = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    expect(magicsquare.correctContents(grid)).toBe(true);
});

test('get sum of row digits', () => {
    expect(magicsquare.rowSum([1,2,3])).toBe(6);
    expect(magicsquare.rowSum([4,5,6])).toBe(15);
});
