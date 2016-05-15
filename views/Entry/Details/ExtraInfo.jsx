const React = require('react');
const formatStat = require('../../Utilities/formatStat');

const ExtraInfo = React.createClass({
  render() {
    const evs = Object.keys(this.props.ev).map(function(ev){
      return <span>{this.props.ev[ev]} {formatStat(ev)}</span>
    }.bind(this));
    return (
      <div className="ExtraInfo">
        <h3>extra info</h3>
        <p className="ExtraInfo_CatchRate">
          <span className="ExtraInfo_Title">catch rate</span>
          <span className="ExtraInfo_Value">{this.props.catchRate}</span>
        </p>
        <p className="ExtraInfo_HatchCounter">
          <span className="ExtraInfo_Title">hatch counter</span>
          <span className="ExtraInfo_Value">{this.props.hatchCounter}</span>
        </p>
        <p className="ExtraInfo_EffortValues">
          <span className="ExtraInfo_Title">effort values</span>
          <span className="ExtraInfo_Value">{evs}</span>
        </p>
      </div>
    )
  }
});

module.exports = ExtraInfo;
