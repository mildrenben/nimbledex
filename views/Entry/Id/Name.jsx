const React = require('react');

const Name = React.createClass({
  render() {
    return <h1 className="Id_Name">{this.props.name}</h1>
  }
});

module.exports = Name;
