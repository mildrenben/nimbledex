const React = require('react');
const ListItem = require('./ListItem');

const MonList = React.createClass({
  render() {
    const items = this.props.arr.map((mon) => {
      return <ListItem mon={mon} />;
    });

    return (
      <div className="MonList">
        <div className="MonListHeader">
          <div className="MonListHeader_Id">#</div>
          <div className="MonListHeader_Name">Name</div>
          <div className="MonListHeader_Types">Types</div>
          <div className="MonListHeader_Stats">
            <div className="MonListHeader_Stat">HP</div>
            <div className="MonListHeader_Stat">Atk</div>
            <div className="MonListHeader_Stat">Def</div>
            <div className="MonListHeader_Stat">Sp Atk</div>
            <div className="MonListHeader_Stat">Sp Def</div>
            <div className="MonListHeader_Stat">Spe</div>
            <div className="MonListHeader_Stat">BST</div>
          </div>
        </div>
        {items}
      </div>
    );
  },
});

module.exports = MonList;
