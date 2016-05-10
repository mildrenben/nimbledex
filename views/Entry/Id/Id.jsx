const React = require('react');
const Name = require('./Name');
const IdNumber = require('./IdNumber');
const Types = require('./Types');

const Id = React.createClass({
  render() {
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
