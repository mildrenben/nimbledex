var React = require('react');

var Name = React.createClass({
  render: function () {
    return <h1 className="Id_Name">{this.props.name}</h1>
  }
});

module.exports = Name;
