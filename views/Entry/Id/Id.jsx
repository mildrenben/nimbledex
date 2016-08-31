const React = require('react');
const Types = require('./Types');
const capitaliseFirst = require('../../Utilities/capitaliseFirst');
const suffix = ['default', 'form-1', 'form-2'];

const Id = React.createClass({
  render() {
    const forms = this.props.forms !== undefined ? this.props.forms : null;
    const type = forms && forms[0].name.includes('Mega') ? 'Mega' : 'Primal';
    const imgURL = `/img/sprites/${this.props.idnumber}.png`;
    const imgURL1 = `/img/sprites/${this.props.idnumber}-1.png`;
    const imgURL2 = `/img/sprites/${this.props.idnumber}-2.png`;

    const defaultName = (
      <h1 className="Id_Name Id_Name--default">{this.props.name}</h1>
    );
    const formNames = forms && this.props.forms.map((form, i) => {
      return (
        <h2 className={`Id_Name Id_Name--${suffix[i + 1]}`}>{form.name}</h2>
      )
    });

    return (
      <div className="Id" id="Id">
        <img className="Id_Img Id_Img--default" src={imgURL}
        alt={`${this.props.name} Pokemon Showdown Pokedex | Nimbledex`}
        title={`${this.props.name} Pokemon Showdown Pokedex | Nimbledex`} />
        {forms && <img className="Id_Img Id_Img--form-1" src={imgURL1}
        alt={`${forms[0].name} Pokemon Showdown Pokedex | Nimbledex`}
        title={`${forms[0].name} Pokemon Showdown Pokedex | Nimbledex`} /> }
        {forms && forms.length > 1 && <img className="Id_Img Id_Img--form-2" src={imgURL2}
        alt={`${forms[1].name} Pokemon Showdown Pokedex | Nimbledex`}
        title={`${forms[1].name} Pokemon Showdown Pokedex | Nimbledex`} /> }
        <div className="Id_Identifiers">
          {defaultName}
          {formNames}
          <p className="Id_IdNumber">{this.props.idnumber}</p>
        </div>
        <Types types={this.props.types} forms={this.props.forms} />
      </div>
    )
  }
});

module.exports = Id;
