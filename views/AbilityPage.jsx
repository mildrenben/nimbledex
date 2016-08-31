const React = require('react');
const Nav = require('./Nav/Nav');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const FootScripts = require('./Components/FootScripts');
const BackToTop = require('./Components/BackToTop');
const MonList = require('./Components/MonList');
const capitaliseFirst = require('./Utilities/capitaliseFirst');
const formatString = require('./Utilities/formatString');

const AbilityPage = React.createClass({
  render() {
    const props = this.props.data;
    const title = capitaliseFirst(formatString(props.name));
    const mons = props.monData;

    return (
      <html>
        <Head title={`Pokemon Showdown Pokedex ${title} Ability | Nimbledex`} name='AbilityPage' idnumber='001' stylesheet="ability" />
        <body className="AbilityPage">
          <Nav />
          <main>
            <h1 className="AbilityPage_Title">{title} <span>Ability</span></h1>
            <p className="AbilityPage_Description">{props.description}</p>
            <h3 className="AbilityPage_MonsText">Pokemon with this ability</h3>
            <MonList arr={mons} />
          </main>
          <BackToTop />
          <Info />
          <FootScripts />
        </body>
      </html>
    );
  }
});

module.exports = AbilityPage;
