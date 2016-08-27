const React = require('react');
const Types = require('./Types');
const FormUtil = require('../FormUtil');

const Id = React.createClass({
  render() {
    const forms = this.props.forms !== undefined ? this.props.forms : null;
    const type = forms && forms[0].name.includes('Mega') ? 'Mega' : 'Primal';
    const imgURL = `/img/sprites/${this.props.idnumber}.png`;
    const imgURL1 = `/img/sprites/${this.props.idnumber}-1.png`;
    const imgURL2 = `/img/sprites/${this.props.idnumber}-2.png`;

    return (
      <div className="Id" id="Id">
        <img className="Id_Img Id_Img--default" src={imgURL} />
        <img className="Id_Img Id_Img--form-1" src={imgURL1} />
        <img className="Id_Img Id_Img--form-2" src={imgURL2} />
        <div className="Id_Identifiers">
          <FormUtil tag='h1' data={this.props} stat='name' className="Id_Name" />
          <p className="Id_IdNumber">{this.props.idnumber}</p>
        </div>
        <Types types={this.props.types} forms={this.props.forms} />
      </div>
    )
  }
});

module.exports = Id;
