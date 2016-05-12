const React = require('react');

const Icon = React.createClass({
  render() {
    const name = this.props.name;

    return (
      <span className="IconWrap">
        <img className={`Icon Icon--${name}`} src={`/img/icons/${name}.svg`} alt={`${name}-icon`} />
        <span className="IconTooltip">
          {this.props.tooltip}
        </span>
      </span>
    );
  }
});

module.exports = Icon;
