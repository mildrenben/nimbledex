const React = require('react');
const Nav = require('./Nav/Nav');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const FootScripts = require('./Components/FootScripts');
const BackToTop = require('./Components/BackToTop');
const MonList = require('./Components/MonList');

const All = React.createClass({
  render() {
    const sideNavItems = [
      { name: '#100', link: '#100' },
      { name: '#200', link: '#200' },
      { name: '#300', link: '#300' },
      { name: '#400', link: '#400' },
      { name: '#500', link: '#500' },
      { name: '#600', link: '#600' },
      { name: '#700', link: '#700' },
    ];
    return (
      <html>
        <Head title='Pokemon Showdown Pokedex | All Pokemon | Nimbledex' name='All' idnumber='001' stylesheet="all" />
        <body className="All">
          <Nav sideNavItems={sideNavItems} />
          <main>
            <MonList arr={this.props.arr} />
          </main>
          <BackToTop />
          <Info />
          <FootScripts />
        </body>
      </html>
    );
  }
});

module.exports = All;
