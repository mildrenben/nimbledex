const React = require('react');
const EvolSingle = require('./EvolSingle');

const Evol = React.createClass({
  render() {
    const EvolItems = this.props.evol.map(function(evol) {
      if (!evol.multi && !evol.multi2) {
        return <EvolSingle idnumber={evol.id} trigger={evol.trigger} other={evol.other} multi={evol.multi} />;
      }
    });
    const MultiEvolItems = this.props.evol.map(function(evol) {
      if (evol.multi) {
        return <EvolSingle idnumber={evol.id} trigger={evol.trigger} other={evol.other} multi={evol.multi} />;
      }
    });
    // Ugly hack for wurmple evo line, fuck wurmple
    const Multi2EvolItems = this.props.evol.map(function(evol) {
      if (evol.multi2) {
        return <EvolSingle idnumber={evol.id} trigger={evol.trigger} other={evol.other} multi={evol.multi} />;
      }
    });
    return (
      <div className="Evol">
        {EvolItems}
        <div className="Evol_Multi">
          {MultiEvolItems}
        </div>
        <div className="Evol_Multi">
          {Multi2EvolItems}
        </div>
      </div>
    )
  }
});

module.exports = Evol;
