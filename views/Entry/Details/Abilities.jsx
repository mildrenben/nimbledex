var React = require('react');

var Abilities = React.createClass({
  render: function() {
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
