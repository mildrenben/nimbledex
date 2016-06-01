const React = require('react');
const Nav = require('./Nav/Nav');
const Id = require('./entry/Id/Id');
const Evol = require('./entry/Evol/Evol');
const Details = require('./entry/Details/Details');
const DmgChart = require('./entry/DmgChart/DmgChart');
const Info = require('./Components/Info');
const Moves = require('./Entry/Moves/Moves');
const BackToTop = require('./Components/BackToTop');
const Head = require('./Components/Head');
const capitaliseFirst = require('./Utilities/capitaliseFirst');

const Root = React.createClass({
  render() {
    const title = capitaliseFirst(this.props.name);
    return (
      <html prefix="og: http://ogp.me/ns#">
        <Head title={`${title} | Nimbledex`} name={this.props.name} idnumber={this.props.id} stylesheet="entry"/>
        <body>
          <Nav />
          <main>
            <Id name={this.props.name} idnumber={this.props.id} types={this.props.types} />
            <Evol evol={this.props.evol} />
            <Details
              abilities={this.props.abilities}
              catchRate={this.props.captureRate}
              hatchCounter={this.props.hatchCounter}
              ev={this.props.ev}
              stats={this.props.stats} />
            <DmgChart dmgChart={this.props.dmgChart} />
            <Info />
            <Moves moves={this.props.moves} />
            <BackToTop />
          </main>
          <script src="/js/script.js"> </script>
          <script src="/js/awesomplete.min.js"> </script>
          <script src="/js/typeahead.js"> </script>
        </body>
      </html>
    )
  }
});

module.exports = Root;
