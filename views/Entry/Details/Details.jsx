var React = require('react');
var Abilities = require('./Abilities');
var ExtraInfo = require('./ExtraInfo');
var Stats = require('./Stats');

var Details = React.createClass({
  render: function () {
    return (
      <div className="Details">
        <Stats stats={this.props.stats} />
        <Abilities abilities={this.props.abilities} />
        <ExtraInfo
          catchRate={this.props.catchRate}
          hatchCounter={this.props.hatchCounter}
          ev={this.props.ev} />
      </div>
    )
  }
});

module.exports = Details;
