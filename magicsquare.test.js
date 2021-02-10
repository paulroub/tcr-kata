const magicsquare = require('./magicsquare');

test('fail on 0 rows', () => {
    expect(magicsquare([])).toBe(false);
});

test('succeed with 3 rows', () => {
    expect(magicsquare([1,1,1])).toBe(true);
});
