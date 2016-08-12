const React = require('react');
const MoveCategory = require('./MoveCategory');

const Moves = React.createClass({
  render() {
    const moves = this.props.moves;
    const types = this.props.types;

    return (
      <div className="Moves">
        <MoveCategory title="Level Up" types={types} moveList={moves.level} firstCol="Lvl"/>
        <MoveCategory title="TM/HM" types={types} moveList={moves.machine} firstCol="#"/>
        <MoveCategory title="Tutor" types={types} moveList={moves.tutor} />
        <MoveCategory title="Egg" types={types} moveList={moves.egg} />
      </div>
    )
  }
});

module.exports = Moves;
