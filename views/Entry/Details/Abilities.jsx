const React = require('react');
const formatString = require('../../Utilities/formatString');
const FormUtil = require('../FormUtil');
const suffix = ['default', 'form-1', 'form-2'];

const Abilities = React.createClass({
  render() {
    const props = this.props;
    const abilities = this.props.abilities.map(function(ability){
      return (
        <p className={`Ability TooltipWrap Ability--default ${ability.hidden && 'Ability--hidden'}`}>
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
    const abilitiesForms = props.forms && props.forms.map((form, i) => {
      return (
        <p className={`Ability TooltipWrap Ability--${suffix[i + 1]}`}>
          <a href={`/ability/${form.abilities[0].name}`}>{formatString(form.abilities[0].name)}</a>
          <span className="Tooltip">{form.abilities[0].description}</span>
        </p>
      );
    });

    return (
      <div className="Details_Abilities">
        <h3>abilities</h3>
        {abilities}
        {abilitiesForms}
      </div>
    )
  }
});

module.exports = Abilities;
