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
