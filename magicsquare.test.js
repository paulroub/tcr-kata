const magicsquare = require('./magicsquare');

test('fail on 0 rows', () => {
    expect(magicsquare([])).toBe(false);
});
