const React = require('react');

const IdNumber = React.createClass({
  render() {
    return <p className="Id_IdNumber">{this.props.idnumber}</p>
  }
});

module.exports = IdNumber;
