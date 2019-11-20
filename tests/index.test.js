const retrieveFromArray = require('../src');

test('Empty array', () => {
  expect(retrieveFromArray([], {}))
    .toEqual([]);
});

const inputArray1 = [{ foo: '1' }, { foo: '2' }, { foo: '3' }];
test('Empty filter', () => {
  expect(retrieveFromArray(inputArray1, {}))
    .toEqual(inputArray1);
});

test('Filter without match', () => {
  expect(retrieveFromArray(inputArray1, { foo: '4' }))
    .toEqual([]);
});

test('Filter with match', () => {
  expect(retrieveFromArray(inputArray1, { foo: '2' }))
    .toEqual([{ foo: '2' }]);
});

// Advanced filter
const inputArray2 = [{ foo: '1', bar: 'a', id: '1a' }, { foo: '2', bar: 'b', id: '2b' }, { foo: '3', bar: 'c', id: '3c' }];
test('Filter with multiple keys and without match', () => {
  expect(retrieveFromArray(inputArray2, { foo: '1', bar: 'c' }))
    .toEqual([]);
});

test('Filter with multiple keys and match', () => {
  expect(retrieveFromArray(inputArray2, { foo: '2', bar: 'b' }))
    .toEqual([{ foo: '2', bar: 'b', id: '2b' }]);
});

test('Filter with match', () => {
  expect(retrieveFromArray(inputArray2, { id: '3c' }))
    .toEqual([{ foo: '3', bar: 'c', id: '3c' }]);
});

const inputArray3 = [{ foo: '1', bar: 'a', id: '1a' }, { foo: '1', bar: 'b', id: '2b' }, { foo: '1', bar: 'c', id: '3c' }];
test('Filter with several match', () => {
  expect(retrieveFromArray(inputArray3, { foo: '1' }))
    .toEqual(inputArray3);
});
