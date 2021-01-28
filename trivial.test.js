const foo = require('./foo');

test('doubles odds', () => {
  expect(foo(1)).toBe(2);
});

test('triples evens', () => {
    expect(foo(2)).toBe(6);
  });
