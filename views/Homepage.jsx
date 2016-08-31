const React = require('react');
const Search = require('./Components/Search');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const FootScripts = require('./Components/FootScripts');

const Root = React.createClass({
  render() {
    return (
      <html>
        <Head title={`Pokemon Showdown Pokedex | Nimbledex | Ultra fast Pokedex`} name='' idnumber='001' stylesheet="homepage" />
        <body className="Homepage">
          <main>
            <div className="LogoWrap">
              <h1 className="LogoWrap_Name">
                <span className="LogoWrap_NameInner">Nimbledex </span>
                for Pokemon Showdown
              </h1>
              <div className="LogoWrap_ImgWrap">
                <img className="LogoWrap_Img" src="/img/icons/pokeball.svg" />
                <div className="LogoWrap_AnimWrap">
                  <span className="LogoWrap_StarLeft"></span>
                  <span className="LogoWrap_StarRight"></span>
                  <span className="LogoWrap_CircleOverlay"></span>
                </div>
              </div>
            </div>
            <h3>A minimal, ultra fast Pokedéx built for Pokemon Showdown</h3>
            <Search />
            <a href="/all">All Pokemon</a>
            <Info />
          </main>
          <FootScripts />
        </body>
      </html>
    );
  }
});

module.exports = Root;
