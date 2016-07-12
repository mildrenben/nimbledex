const React = require('react');
const Nav = require('./Nav/Nav');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const FootScripts = require('./Components/FootScripts');
const BackToTop = require('./Components/BackToTop');

const page404 = React.createClass({
  render() {
    return (
      <html>
        <Head title='Missingno | Nimbledex' name='Missingno' idnumber='missingno' stylesheet="404" />
        <body className="page404">
          <Nav sideNavItems={null} />
          <main>
            <div className="MissingnoWrap">
              <img src="/img/sprites/missingno.png" />
              <h5>Missingno</h5>
            </div>
            <p>We could not find the Pokémon you were looking for</p>
            <Info />
          </main>
          <BackToTop />
          <FootScripts />
        </body>
      </html>
    )
  },
});

module.exports = page404;
