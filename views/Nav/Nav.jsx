const React = require('react');
const Search = require('../Components/Search');
const SideNav = require('../Components/SideNav');

const Nav = React.createClass({
  render() {
    return (
      <nav>
        <div className="LogoWrap">
          <h2 className="LogoWrap_Name"><a href="/">Nimbledex</a></h2>
          <div className="LogoWrap_ImgWrap">
            <img className="LogoWrap_Img" src="/img/icons/pokeball.svg" />
            <div className="LogoWrap_AnimWrap">
              <span className="LogoWrap_StarLeft"></span>
              <span className="LogoWrap_StarRight"></span>
              <span className="LogoWrap_CircleOverlay"></span>
            </div>
          </div>
        </div>
        <Search />
        <div className="Links">
          <a className="Links_All" href="/all">All Pokemon</a>
        </div>
        <SideNav />
      </nav>
    )
  }
});

module.exports = Nav;
