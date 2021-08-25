function stringLength(str) {
  const l = str.length;
  if ((l > 0 && l < 11)) {
    return str.length;
  }
  throw new Error('The string should be at least 1 character long and not more than 10 characters');
}

module.exports = stringLength;