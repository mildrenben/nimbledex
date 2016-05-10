const React = require('react');
const Abilities = require('./Abilities');
const ExtraInfo = require('./ExtraInfo');
const Stats = require('./Stats');

const Details = React.createClass({
  render() {
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
