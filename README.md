# @codewell/retrieve-from-array
Retrieve an object from an array with objects using a filter object

## Installation
```
npm install @codewell/retrieve-from-array
```

## Basic usage
```JavaScript
import retrieveFromArray from '@codewell/retrieve-from-array';

const arr1 = [
  { foo: '1', bar: 'a', id: '1a' }, 
  { foo: '2', bar: 'b', id: '2b' }, 
  { foo: '3', bar: 'c', id: '3c' },
];

retrieveFromArray(arr1, { id: '3c' }); 
// => [{ foo: '3', bar: 'c', id: '3c' }]

// All fields in the filter needs to match
retrieveFromArray(arr2, { foo: '2', bar: 'b' }); 
// => [{ foo: '2', bar: 'b', id: '2b' }]
```


