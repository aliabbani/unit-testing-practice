function stringLength(str) {
  const l = str.length;
  if ((l > 0 && l < 11)) {
    return str.length;
  }
  throw new Error('The string should be at least 1 character long and not more than 10 characters');
}
// expand your function to make it check if the string is at least 1 character long
// and not longer than 10 characters. Throw errors if those conditions are not met.
module.exports = stringLength;