// eslint-disable-next-line consistent-return
function capitalize(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

module.exports = capitalize;