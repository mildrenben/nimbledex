var React = require('react');
var EvolSingle = require('./EvolSingle');

var Evol = React.createClass({
  render: function () {
    const EvolItems = this.props.evol.map(function(evol) {
      return <EvolSingle idnumber={evol.id} trigger={evol.trigger} other={evol.other} />;
    });
    return (
      <div className="Evol">
        {EvolItems}
      </div>
    )
  }
});

module.exports = Evol;
