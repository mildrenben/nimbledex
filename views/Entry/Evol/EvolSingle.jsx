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
        return "Level Up"
        break;
      case "use-item":
        return "Use item"
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
        <img className="OtherTrigger_Img" src={`/img/items/${val}.png`} alt={this.formatString(val)} />
      );
    }
    else if (key === 'known_move') {
      return (
        <span>
          Known move - {this.formatString(val)}
        </span>
      );
    }
    else if (key === 'held_item') {
      return (
        <span>
          Holding
          <img className="OtherTrigger_Img" src={`/img/items/${val}.png`} alt={this.formatString(Otherval)} />
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
          <Icon name="heart" />
          {val}
        </span>
      );
    }
    else if (key === 'time_of_day') {
      return (
        <span>
          <Icon name="clock" />
          {val}
        </span>
      );
    }
    else if (key === 'min_affection') {
      return `${val}♥ affection in Amie`;
    }
    else if (key === 'gender') {
      if (val === 1) {
        return (
          <span>
            <Icon name="female" />
            Female
          </span>
        );
      }
      else {
        return (
          <span>
            <Icon name="male" />
            Male
          </span>
        );
      }
    }
    else if(key === 'turn_upside_down') {
      return (
        <span>
          <Icon name="down" />
          Turn 3DS upside down
        </span>
      )
    }
    else if (key === 'needs_overworld_rain') {
      return (
        <span>
          <Icon name="rain" />
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
          {otherTriggers}
        </div>
        <a href={`/${this.props.idnumber}`}>
          <img className="Evol_Img" src={imgURL} />
        </a>
      </div>
    )
  }
});

module.exports = EvolSingle;
