const React = require('react');
const Search = require('../Components/Search');

const Nav = React.createClass({
  render() {
    return (
      <nav>
        <div className="LogoWrap">
          <h2 className="LogoWrap_Name"><a href="/">Nimbledex</a></h2>
          <img className="LogoWrap_Img" src="/img/icons/pokeball.svg" />
        </div>
        <Search />
      </nav>
    )
  }
});

module.exports = Nav;
