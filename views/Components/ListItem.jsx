const React = require('react');

const ListItem = React.createClass({
  getTypes() {
    const types = this.props.mon.types.map((type) => {
      return <div className={`ListItem_Type ListItem_Type--${type}`}>{type}</div>;
    });
    return types;
  },
  getStats() {
    //const statNames = ['hp', 'atk', 'def', 'spatk', 'spdef', 'spe'];
    const stats = this.props.mon.stats.map((stat) => {
      return <div className="ListItem_Stat">{stat}</div>;
    });
    const total = this.getTotal();
    const allStats = stats.concat(total);
    return allStats;
  },
  getTotal() {
    const statsTotal = this.props.mon.stats.reduce((total, stat) => {
      return total + stat;
    });
    return <div className="ListItem_Stat">{statsTotal}</div>;
  },
  getImgPos() {
    let id = parseInt(this.props.mon.id) - 1;
    // Adding on to the id because the
    // spritesheet has formes in it
    // and we need to skip those images
    // will remove this mess once formes are added
    if (id >= 386) {
      id += 3;
    }
    if (id >= 415) {
      id += 2;
    }
    if (id >= 484) {
      id += 5;
    }
    if (id >= 496) {
      id += 1;
    }
    if (id >= 503) {
      id += 1;
    }
    if (id >= 567) {
      id += 1;
    }
    if (id >= 654) {
      id += 1;
    }
    if (id >= 656) {
      id += 1;
    }
    if (id >= 659) {
      id += 1;
    }
    if (id >= 662) {
      id += 2;
    }
    if (id >= 663) {
      id += 1;
    }
    if (id >= 666) {
      id += 1;
    }

    const size = 32;
    const columns = 16;

    const row = Math.floor(id / columns);

    // The 8 added is because the spritesheet
    // doesn't have a gap at the top where it should
    let posX = row * size * -1 + 8 + 'px';
    let posY = (id - (row * columns)) * size  * -1 + 'px';
    return `${posY} ${posX}`;
  },
  render() {
    const mon = this.props.mon;
    const types = this.getTypes();
    const stats = this.getStats();
    const imgPos = this.getImgPos();
    const isDivisible100 = this.props.mon.id % 100 === 0;
    const styles = {
      order: mon.id,
    };

    return (
      <a className="ListItem" href={`/${mon.id}`} id={isDivisible100 ? this.props.mon.id : null}
        style={styles}>
        <span className="ListItem_Img" style={{ backgroundPosition: imgPos }}></span>
        <span className="ListItem_Id">{mon.id}</span>
        <span className="ListItem_Name">{mon.name}</span>
        <div className="ListItem_Types">
          {types}
        </div>
        <div className="ListItem_Stats">
          {stats}
        </div>
      </a>
    )
  }
});

module.exports = ListItem;
