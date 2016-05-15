const formatString = function(str) {
  let newStr = str.replace('_',' ');
  newStr = newStr.replace('-',' ');
  return newStr;
};

module.exports = formatString;
