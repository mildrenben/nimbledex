var React = require('react');

var IdNumber = React.createClass({
  render: function () {
    return <p className="Id_IdNumber">{this.props.idnumber}</p>
  }
});

module.exports = IdNumber;
