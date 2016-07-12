const React = require('react');
const Types = require('./Types');

const Id = React.createClass({
  render() {
    const imgURL = `/img/sprites/${this.props.idnumber}.png`;
    return (
      <div className="Id" id="Id">
        <img className="Id_Img" src={imgURL} />
        <div className="Id_Identifiers">
          <h1 className="Id_Name">{this.props.name}</h1>
          <p className="Id_IdNumber">{this.props.idnumber}</p>
        </div>
        <Types types={this.props.types} />
      </div>
    )
  }
});

module.exports = Id;
