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
    const props = this.props;
    const title = capitaliseFirst(props.name);
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
        <Head title={`${title} | Nimbledex`} name={props.name} idnumber={props.id} stylesheet="entry"/>
        <body>
          <Nav sideNavItems={sideNavItems} />
          <main>
            <Id name={props.name} idnumber={props.id} types={props.types} />
            <Evol evol={props.evol} />
            <Details
              abilities={props.abilities}
              catchRate={props.captureRate}
              hatchCounter={props.hatchCounter}
              ev={props.ev}
              stats={props.stats} />
            <DmgChart dmgChart={props.dmgChart} />
            <Info id={props.id} />
            <Moves moves={props.moves} types={props.types} />
            <BackToTop />
          </main>
          <FootScripts />
        </body>
      </html>
    )
  }
});

module.exports = Root;
