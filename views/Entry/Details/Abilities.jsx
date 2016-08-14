const React = require('react');
const formatString = require('../../Utilities/formatString');

const Abilities = React.createClass({
  render() {
    const abilities = this.props.abilities.map(function(ability){
      return (
        <p className={`Ability TooltipWrap ${ability.hidden && 'Ability--hidden'}`}>
          <a href={`/ability/${ability.name}`}>{formatString(ability.name)}</a>
          { ability.hidden &&
            <span className="Ability_Hidden">hidden</span>
          }
          { ability.description &&
            <span className="Tooltip">{ability.description}</span>
          }
        </p>
      );
    });
    return (
      <div className="Details_Abilities">
        <h3>abilities</h3>
        {abilities}
      </div>
    )
  }
});

module.exports = Abilities;
