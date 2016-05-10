const React = require('react');

const Abilities = React.createClass({
  render() {
    const abilities = this.props.abilities.map(function(ability){
      return <p>{ability}</p>
    });
    return (
      <div className="Details_Abilities">
        {abilities}
      </div>
    )
  }
});

module.exports = Abilities;
