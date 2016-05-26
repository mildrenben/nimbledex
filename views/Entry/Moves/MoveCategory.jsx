const React = require('react');
const formatString = require('../../Utilities/formatString');

const MoveCategory = React.createClass({
  render() {
    const moveList = this.props.moveList;
    const items = moveList.map(item => {
      return (
        <div className="MoveList_Move">
          <Move className="MoveList_Level" data={item.level} />
          <Move className="MoveList_Name" data={formatString(item.name)} />
          <Move className={`MoveList_Type MoveList_Type--${item.type}`} data={item.type} />
          <Move className="MoveList_Category" data={item.category} />
          <Move className="MoveList_Power" data={item.power} />
          <Move className="MoveList_Accuracy" data={item.accuracy} />
        </div>
      );
    });
    return (
      <div className={`MoveList MoveList--${this.props.title}`}>
        <h3>{this.props.title} Moves NEEDS COLUMN HEADERS</h3>
        {items}
      </div>
    )
  }
});

const Move = React.createClass({
  isNull(data) {
    if (data === null) {
      return '-';
    } else {
      return data;
    }
  },
  render() {
    if (this.props.className.includes('Category')) {
      return (
        <span className={`${this.props.className} ${this.props.className}--${this.props.data}`}>
          <img className={`MoveList_Img MoveList_Img--${this.props.data}`}
               src={`/img/icons/${this.props.data}Move.svg`}
               alt={this.props.data}
          />
        </span>
      )
    } else {
      return <span className={this.props.className}>{this.isNull(this.props.data)}</span>
    }
  }
});

module.exports = MoveCategory;
