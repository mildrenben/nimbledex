const React = require('react');
const Stat = require('./Stat');

const Stats = React.createClass({
  render: function() {
    const stats = this.props.stats.map(function(stat){
      return <div className='Stat'>{stat}</div>
    });
    return (
      <div className="Stats">
        <Stat value={this.props.stats[0]} name='HP' />
        <Stat value={this.props.stats[1]} name='Atk' />
        <Stat value={this.props.stats[2]} name='Def' />
        <Stat value={this.props.stats[3]} name='SpAtk' />
        <Stat value={this.props.stats[4]} name='SpDef' />
        <Stat value={this.props.stats[5]} name='Spe' />
      </div>
    );
  }
});

module.exports = Stats;
