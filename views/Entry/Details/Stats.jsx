const React = require('react');
const Stat = require('./Stat');

const Stats = React.createClass({
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
    const stats = this.props.stats.map(function(stat){
      return <div className='Stat'>{stat}</div>
    });

    const bst = this.bst(this.props.stats);

    return (
      <div className="Stats">
        <Stat value={this.props.stats[0]} name='HP' />
        <Stat value={this.props.stats[1]} name='Atk' />
        <Stat value={this.props.stats[2]} name='Def' />
        <Stat value={this.props.stats[3]} name='SpAtk' />
        <Stat value={this.props.stats[4]} name='SpDef' />
        <Stat value={this.props.stats[5]} name='Spe' />
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
