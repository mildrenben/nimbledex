const React = require('react');

const Stat = React.createClass({
  barColor(val) {
    if (val < 60) {
      return "low";
    } else if (val < 80) {
      return "meh";
    } else if (val < 95) {
      return "med";
    } else if (val < 110) {
      return "good";
    } else if (val < 125) {
      return "veryGood";
    } else  {
      return "superb";
    }
  },
  render() {
    const barWidth = `${this.props.value}px`;
    let barColor = this.barColor(this.props.value);

    return (
      <div className={`Stat Stat--${this.props.name}`}>
        <span className="Stat_Name">{this.props.name}</span>
        <div className={`Stat_Bar Stat_Bar--${barColor}`}style={{ width: barWidth }}></div>
        <span className="Stat_Number">{this.props.value}</span>
      </div>
    );
  }
});

module.exports = Stat;
