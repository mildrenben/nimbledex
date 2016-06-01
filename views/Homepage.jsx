const React = require('react');
const Search = require('./Components/Search');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const Tracking = require('./Components/Tracking');

const Root = React.createClass({
  render() {
    return (
      <html>
        <Head title={`Nimbledex | Ultra fast Pokedex`} name='' idnumber='001' stylesheet="homepage" />
        <body className="Homepage">
          <main>
            <div className="LogoWrap">
              <h1 className="LogoWrap_Name">Nimbledex</h1>
              <div className="LogoWrap_ImgWrap">
                <img className="LogoWrap_Img" src="/img/icons/pokeball.svg" />
                <div className="LogoWrap_AnimWrap">
                  <span className="LogoWrap_StarLeft"></span>
                  <span className="LogoWrap_StarRight"></span>
                  <span className="LogoWrap_CircleOverlay"></span>
                </div>
              </div>
            </div>
            <h3>A minimal, ultra fast Pokedéx</h3>
            <Search />
            <Info />
          </main>
          <Tracking />
          <script src="/js/script.js"> </script>
          <script src="/js/awesomplete.min.js"> </script>
          <script src="/js/typeahead.js"> </script>
        </body>
      </html>
    );
  }
});

module.exports = Root;
