const React = require('react');
const formatString = require('../../Utilities/formatString');

const MoveCategory = React.createClass({
  render() {
    const moveList = this.props.moveList;
    const items = moveList.map(item => {
      let firstCol;
      let styles = {
        order: null,
      };
      if (this.props.firstCol === 'Lvl') {
        firstCol = <Move className="MoveList_Number" data={item.level} />;
        styles.order = item.level;
      } else if (this.props.firstCol === '#') {
        firstCol = <Move className="MoveList_Number MoveList_Number--machines" data={item.machine} />;
        if (item.machine.charAt(0) === 't') {
          styles.order = item.machine.slice(2);
        } else {
          styles.order = parseInt(item.machine.slice(2)) + 100;
        }
      }

      return (
        <div className="MoveList_Move" style={styles}>
          {firstCol}
          <Move className="MoveList_Name" data={formatString(item.name)} />
          <Move className={`MoveList_Type MoveList_Type--${item.type}`} data={item.type} />
          <Move className="MoveList_Category" data={item.category} />
          <Move className="MoveList_Power" data={item.power} />
          <Move className="MoveList_Accuracy" data={item.accuracy} />
        </div>
      );
    });

    return (
      <div className={`MoveListWrap MoveListWrap--${this.props.title}`} id={this.props.title.replace(' ', '')}>
        <h3>{this.props.title} Moves</h3>
        <div className="MoveListHeader">
          {this.props.firstCol &&
            <span className="MoveListHeader_Number">{this.props.firstCol}</span>
          }
          <span className="MoveListHeader_Name">Name</span>
          <span className="MoveListHeader_Type">Type</span>
          <span className="MoveListHeader_Category">Cat</span>
          <span className="MoveListHeader_Power">Pwr</span>
          <span className="MoveListHeader_Accuracy">Acc</span>
        </div>
        <div className={`MoveList MoveList--${this.props.title}`}>
          {items.length === 0 ?
            <span className="MoveList_NoMoves">No {this.props.title} moves</span>
            : items
          }
        </div>
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
               alt={this.props.data} />
        </span>
      )
    } else {
      return <span className={this.props.className}>{this.isNull(this.props.data)}</span>
    }
  }
});

module.exports = MoveCategory;
