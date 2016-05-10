const React = require('react');

const Icon = React.createClass({
  render() {
    const name = this.props.name;
    return (
      <img className={`Icon Icon--${name}`} src={`/img/icons/${name}.svg`} alt={`${name}-icon`} />
    );
  }
});

module.exports = Icon;
