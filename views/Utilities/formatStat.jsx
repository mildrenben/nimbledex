const formatStat = function(stat) {
  switch (stat) {
    case 'hp':
      return 'hp'
      break;
    case 'attack':
      return 'atk'
      break;
    case 'defense':
      return 'def'
      break;
    case 'special-attack':
      return 'spatk'
      break;
    case 'special-defense':
      return 'spdef'
      break;
    case 'speed':
      return 'spe'
      break;
  }
}

module.exports = formatStat;
