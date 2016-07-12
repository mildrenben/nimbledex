const React = require('react');
const Nav = require('./Nav/Nav');
const Id = require('./Entry/Id/Id');
const Evol = require('./Entry/Evol/Evol');
const Details = require('./Entry/Details/Details');
const DmgChart = require('./Entry/DmgChart/DmgChart');
const Info = require('./Components/Info');
const Moves = require('./Entry/Moves/Moves');
const BackToTop = require('./Components/BackToTop');
const Head = require('./Components/Head');
const FootScripts = require('./Components/FootScripts');
const capitaliseFirst = require('./Utilities/capitaliseFirst');

const Root = React.createClass({
  render() {
    const title = capitaliseFirst(this.props.name);
    const sideNavItems = [
      { name: 'Id', link: '#Id' },
      { name: 'Details', link: '#Details' },
      { name: 'Lvl Up Moves', link: '#LevelUp' },
      { name: 'TM/HM Moves', link: '#TM/HM' },
      { name: 'Tutor Moves', link: '#Tutor' },
      { name: 'Egg Moves', link: '#Egg' },
    ];
    return (
      <html prefix="og: http://ogp.me/ns#">
        <Head title={`${title} | Nimbledex`} name={this.props.name} idnumber={this.props.id} stylesheet="entry"/>
        <body>
          <Nav sideNavItems={sideNavItems}/>
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
          <FootScripts />
        </body>
      </html>
    )
  }
});

module.exports = Root;
