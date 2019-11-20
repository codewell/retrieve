const and = require('@codewell/and');
const isEmpty = require('@codewell/is-empty');

/**
 * Get an object from an array with 
 * @param {[objects]} array - Array with objects
 * @param {object} filter - object  with key - value pair to filter with
 */
const retrieveFromArray = (array, filter) => {
  if (array === undefined || array === null || array.length === 0) {
    return array;
  }

  if (!Array.isArray(array)) {
    throw new Error(`Expected first parameter to be array got ${typeof array}`)
  }

  if (typeof filter !== 'object') {
    throw new Error(`Expected second parameter to be object got ${typeof filter}`)
  }

  if (isEmpty(filter)) {
    return array;
  }

  const keys = Object.getOwnPropertyNames(filter);

  return array.filter(element => {
    // Check if all values of the filter
    // are correct
    return and(keys.map(key => element[key] === filter[key]))
  });
};

module.exports = retrieveFromArray;
