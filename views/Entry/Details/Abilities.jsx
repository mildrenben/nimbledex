const React = require('react');
const formatString = require('../../Utilities/formatString');

const Abilities = React.createClass({
  render() {
    const abilities = this.props.abilities.map(function(ability){
      return <p>{formatString(ability)}</p>
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
