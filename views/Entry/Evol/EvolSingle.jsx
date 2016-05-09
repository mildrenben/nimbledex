var React = require('react');

var EvolSingle = React.createClass({
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
        return "Empty part slot"
        break;
    }
  },
  changeOther(key) {
    switch (key) {
      case 'item':
      case 'held_item':
        return 'displayVal'
        break;
      case 'min_level':
        return ''
        break;
      case 'min_happiness':
      case 'time_of_day':
        return 'displayKeyVal'
        break;
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
        const Other = this.changeOther(key);
        let OtherEl;
        if (Other === 'displayVal') {
          OtherEl = this.formatString(this.props.other[key]);
        }
        else if (Other === 'displayKeyVal') {
          const Key = this.formatString(key);
          const Val = this.props.other[key];
          OtherEl = `${Key} ${Val}`;
        }
        else if (Other === 'displayImg') {
          OtherEl = this.props.other[key];
        }
        else {
          OtherEl = this.props.other[key];
        }
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
