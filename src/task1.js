function stringLength(str) {
  const l = str.length;
  if ((l > 0 && l < 11)) {
    return str.length;
  }
  return false;
}

module.exports = stringLength;