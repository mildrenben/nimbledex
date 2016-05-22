const React = require('react');

const DmgChart = React.createClass({
  removeZero(num) {
    const numString = num.toString();
    if (numString[0] === '0' && numString.length > 1) {
      return num.toString().slice(1);
    } else {
      return num;
    }
  },
  shortenType(type) {
    //return type.slice(0, 3);
    return type;
  },
  render() {
    const dmgChart = this.props.dmgChart;
    const items = Object.keys(dmgChart).map(item => {
      return (
        <div className={`DmgChart_Item DmgChart_Item--${item}`}>
          <div className={`DmgChart_Type DmgChart_Type--${item}`}>{this.shortenType(item)}</div>
          <div className="DmgChart_Multiplier">{this.removeZero(dmgChart[item])}</div>
        </div>
      );
    });
    return (
      <div className="DmgChart">
        <h3>damage chart</h3>
        <div className="DmgChart_Chart">
          {items}
        </div>
      </div>
    )
  }
});

module.exports = DmgChart;
