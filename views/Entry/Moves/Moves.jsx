const React = require('react');
const MoveCategory = require('./MoveCategory');

const Moves = React.createClass({
  render() {
    const moves = this.props.moves;
    return (
      <div className="Moves">
        <MoveCategory title="Level Up" moveList={moves.level} firstCol="Lvl"/>
        <MoveCategory title="TM/HM" moveList={moves.machine} firstCol="#"/>
        <MoveCategory title="Tutor" moveList={moves.tutor} />
        <MoveCategory title="Egg" moveList={moves.egg} />
      </div>
    )
  }
});

module.exports = Moves;