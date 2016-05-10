var React = require('react');
var Name = require('./Name');
var IdNumber = require('./IdNumber');
var Types = require('./Types');

var Id = React.createClass({
  render: function () {
    const imgURL = `/img/sprites/${this.props.idnumber}.png`;
    return (
      <div className="Id">
        <img className="Id_Img" src={imgURL} />
        <div className="Id_Identifiers">
          <Name name={this.props.name} />
          <IdNumber idnumber={this.props.idnumber} />
        </div>
        <Types types={this.props.types} />
      </div>
    )
  }
});

module.exports = Id;
