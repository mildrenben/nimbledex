var React = require('react');

var Stat = React.createClass({
  barColor: function(val) {
    if (val < 50) {
       return "low"
    }
    else if (val < 80) {
       return "med"
    }
    else if (val < 100) {
       return "good"
    }
    else if (val < 120) {
       return "veryGood"
    }
    else {
       return "superb"
    }
  },
  render: function() {
    const barWidth = this.props.value + 'px';
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
