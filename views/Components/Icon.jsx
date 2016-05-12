const React = require('react');

const Icon = React.createClass({
  render() {
    const name = this.props.name;
    const type = this.props.type;
    let ext;
    switch(type) {
      case "icon":
        ext = "svg";
        break;
      case "item":
        ext = "png";
        break;
    }

    return (
      <span className="IconWrap">
        <img className={`Icon Icon--${type} Icon--${name}`} src={`/img/${this.props.type}s/${name}.${ext}`} alt={`${name}-icon`} />
        <span className="IconTooltip">
          {this.props.tooltip}
        </span>
      </span>
    );
  }
});

module.exports = Icon;
