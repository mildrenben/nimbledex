var React = require('react');

var EvolSingle = React.createClass({
  render: function () {
    const imgURL = `/img/${this.props.idnumber}.png`;
    if (! (this.props.trigger === undefined)) {
      var trigger = <p className={`EvolTrigger EvolTrigger--${this.props.trigger}`}>{this.props.trigger}</p>
    }
    if (! (this.props.other === undefined)) {
      var otherTriggers = Object.keys(this.props.other).map(function(key) {
        return <div className={`OtherTrigger OtherTrigger--${key}`}>{key} - {this.props.other[key]}</div>;
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
