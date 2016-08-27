const React = require('react');

const suffix = ['default', 'form-1', 'form-2'];

const FormTabs = React.createClass({
  render() {
    if (this.props.forms === undefined) {
      return null;
    }

    const formInputs = this.props.forms && this.props.forms.map((form, i) => {
      return (
        <div className="FormTabs_TabLabel">
          <input type="radio" name="form" className="FormTabs_Tab" id={suffix[i + 1]} />
          <label className="FormTabs_Label" htmlFor={suffix[i + 1]}>{form.name}</label>
        </div>
      );
    });

    return (
      <div className="FormTabs">
        <div className="FormTabs_TabLabel">
          <input type="radio" name="form" className="FormTabs_Tab" id="default" checked />
          <label className="FormTabs_Label" htmlFor="default">{this.props.name}</label>
        </div>
        {formInputs}
      </div>
    );
  },
});

module.exports = FormTabs;
