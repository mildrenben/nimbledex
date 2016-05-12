const React = require('react');
const Icon = require('../../Components/Icon');

const EvolSingle = React.createClass({
  formatString(str) {
    let newStr = str.replace('_',' ');
    newStr = newStr.replace('-',' ');
    return newStr;
  },
  changeTrigger(str) {
    switch (str) {
      case "level-up":
        return "Lvl Up"
        break;
      case "use-item":
        return "Item"
        break;
      case "trade":
        return "Trade"
        break;
      case "shed":
        return "Empty party slot & Pokeball in bag"
        break;
    }
  },
  changeOther(key, val) {
    if (key === 'min_level') {
      return val;
    }
    else if (key === 'item') {
      return (
        <Icon name={val} type="item" tooltip={this.formatString(val)}/>
      );
    }
    else if (key === 'known_move') {
      return (
        <span>
          <Icon name="tm-ground" type="item" tooltip="Known move" />
          {this.formatString(val)}
        </span>
      );
    }
    else if (key === 'held_item') {
      return (
        <span>
          Holding
          <Icon name={val} type="item" tooltip={this.formatString(val)} />
        </span>
      );
    }
    else if (key === 'known_move_type') {
      return (
        <span>
          Known move type - {this.formatString(val)}
        </span>
      );
    }
    else if (key === 'min_happiness') {
      return (
        <span>
          <Icon name="heart" type="icon" tooltip="Min. Happiness" />
          {val}
        </span>
      );
    }
    else if (key === 'location') {
      if (val.constructor === Array) {
        const items = val.map(function(item) {
          // const str = this.formatString(item);
          return <span>{this.formatString(item)}</span>;
        }.bind(this));
        return (
          <span>
            {items}
          </span>
        )
      } else {
        return val;
      }
    }
    else if (key === 'time_of_day') {
      return (
        <span>
          <Icon name="clock" type="icon" tooltip="Time of Day" />
          {val}
        </span>
      );
    }
    else if (key === 'min_affection') {
      return `${val}♥ in Amie`;
    }
    else if (key === 'gender') {
      if (val === 1) {
        return (
          <span>
            <Icon name="female" type="icon" />
            Female
          </span>
        );
      }
      else {
        return (
          <span>
            <Icon name="male" type="icon" />
            Male
          </span>
        );
      }
    }
    else if(key === 'turn_upside_down') {
      return (
        <span>
          <Icon name="down" type="icon" />
          Turn 3DS upside down
        </span>
      )
    }
    else if (key === 'needs_overworld_rain') {
      return (
        <span>
          <Icon name="rain" type="icon" />
          Needs overworld rain
        </span>
      )
    }
    else if (key === 'party_species') {
      return `With ${val} in party`;
    }
    else if (key === 'trade_species') {
      return `For ${val}`;
    }
    else if (key === 'relative_physical_stats') {
      if (val === -1) {
        return 'Atk > Def';
      }
      else if (val === 1) {
        return 'Atk < Def';
      }
      else {
        return 'Atk = Def';
      }
    }
    else {
      return val;
    }
  },
  render() {
    const imgURL = `/img/sprites/${this.props.idnumber}.png`;

    let trigger;
    if (! (this.props.trigger === undefined)) {
      const Trigger = this.changeTrigger(this.props.trigger);
      trigger = <p className={`EvolTrigger EvolTrigger--${this.props.trigger}`}>{Trigger}</p>
    }

    let otherTriggers;
    if (! (this.props.other === undefined)) {
      otherTriggers = Object.keys(this.props.other).map(function(key) {
        const val = this.props.other[key];
        const OtherEl = this.changeOther(key, val);
        return <div className={`OtherTrigger OtherTrigger--${key}`}>{OtherEl}</div>;
      }.bind(this));
    }

    return (
      <div className="Evol_EvolSingle">
        <div className="Evol_Triggers">
          {trigger}
          <div className="Evol_OtherTriggers">
            {otherTriggers}
          </div>
        </div>
        <a href={`/${this.props.idnumber}`}>
          <img className="Evol_Img" src={imgURL} />
        </a>
      </div>
    )
  }
});

module.exports = EvolSingle;
