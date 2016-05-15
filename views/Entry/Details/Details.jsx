const React = require('react');
const Abilities = require('./Abilities');
const ExtraInfo = require('./ExtraInfo');
const Stats = require('./Stats');

const Details = React.createClass({
  render() {
    return (
      <div className="Details">
        <Abilities abilities={this.props.abilities} />
        <ExtraInfo
          catchRate={this.props.catchRate}
          hatchCounter={this.props.hatchCounter}
          ev={this.props.ev} />
        <Stats stats={this.props.stats} />
      </div>
    )
  }
});

module.exports = Details;
