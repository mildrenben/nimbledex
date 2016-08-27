const React = require('react');
const Stat = require('./Stat');
const suffix = ['default', 'form-1', 'form-2'];

const Stats = React.createClass({
  render() {
    return (
      <span>
        <StatsSet stats={this.props.stats} suffix="default" />
        {this.props.forms &&
          <StatsSet stats={this.props.forms[0].stats} suffix="form-1" />
        }
        {this.props.forms && this.props.forms.length > 1 &&
          <StatsSet stats={this.props.forms[1].stats} suffix="form-2" />
        }
      </span>
    );
  }
});

const StatOrder = ['HP', 'Atk', 'Def', 'SpAtk', 'SpDef', 'Spe'];

const StatsSet = React.createClass({
  bst(vals) {
    const bstNum = vals.reduce((total, n) => {
      return total + n;
    });

    let bstColor;

    if (bstNum < 360) {
      bstColor = 'low';
    } else if (bstNum < 460) {
      bstColor = 'meh';
    } else if (bstNum < 560) {
      bstColor = 'med';
    } else if (bstNum < 660) {
      bstColor = 'good';
    } else if (bstNum >= 660) {
      bstColor = 'superb';
    }

    const bst = {
      num: bstNum,
      color: bstColor,
    };

    return bst;
  },
  render() {
    const items =  this.props.stats.map((stat, i) => {
        return <Stat value={stat} name={StatOrder[i]} />
    });
    const bst = this.bst(this.props.stats);

    return (
      <div className={`Stats Stats--${this.props.suffix}`}>
        {items}
        <div className="Stats_BST">
          <span className="Stats_BSTName">total</span>
          <span className={`Stats_BSTDot Stats_BSTDot--${bst.color}`}></span>
          <span className="Stats_BSTNumber">{bst.num}</span>
        </div>
      </div>
    );
  }
});

module.exports = Stats;
