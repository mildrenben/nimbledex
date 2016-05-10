const React = require('react');

const ExtraInfo = React.createClass({
  render() {
    const evs = Object.keys(this.props.ev).map(function(ev){
      return <span>{ev} - {this.props.ev[ev]}</span>
    }.bind(this));
    return (
      <div className="ExtraInfo">
        <p className="ExtraInfo_CatchRate">Catch Rate: {this.props.catchRate}</p>
        <p className="ExtraInfo_HatchCounter">Hatch Counter: {this.props.hatchCounter}</p>
        <p className="ExtraInfo_EffortValues">Effort Values: {evs}</p>
      </div>
    )
  }
});

module.exports = ExtraInfo;
