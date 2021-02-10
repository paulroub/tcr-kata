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
