const React = require('react');
const EvolSingle = require('./EvolSingle');

const Evol = React.createClass({
  render() {
    const EvolItems = this.props.evol.map(function(evol) {
      return <EvolSingle idnumber={evol.id} trigger={evol.trigger} other={evol.other} multi={evol.multi} />;
    });
    return (
      <div className="Evol">
        {EvolItems}
      </div>
    )
  }
});

module.exports = Evol;
