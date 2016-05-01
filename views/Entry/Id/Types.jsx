var React = require('react');

var Types = React.createClass({
  render: function () {
    const amountOfTypes = this.props.types.length;

    if (amountOfTypes === 1) {
      return (
        <div className="Id_Types">
          <p className={ `Id_Type Id_Type--${this.props.types[0]}` }>
            {this.props.types[0]}
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="Id_Types">
          <p className={ `Id_Type Id_Type--${this.props.types[0]}` }>
            {this.props.types[0]}
          </p>
          <p className={ `Id_Type Id_Type--${this.props.types[1]}` }>
            {this.props.types[1]}
          </p>
        </div>
      );
    }
  }
});

module.exports = Types;
