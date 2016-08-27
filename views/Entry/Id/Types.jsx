const React = require('react');
const suffix = ['default', 'form-1', 'form-2'];

const Types = React.createClass({
  render() {
    const props = this.props;
    const types = props.types.map((type) => {
      return (
        <p className={ `Id_Type Id_Type--${type} Id_Type--default` }>
          {type}
        </p>
      );
    });

    const formTypes = props.forms && props.forms.map((form, i) => {
      return form.types.map((type) => {
        return (
          <p className={ `Id_Type Id_Type--${type} Id_Type--${suffix[i + 1]}` }>
            {type}
          </p>
        );
      });
    });

    return (
      <div className="Id_Types">
        {types}
        {formTypes}
      </div>
    )
  }
});

module.exports = Types;
