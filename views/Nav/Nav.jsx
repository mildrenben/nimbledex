const React = require('react');
const Search = require('../Components/Search');

const Nav = React.createClass({
  render() {
    return (
      <nav>
        <div className="Logo">
          <img className="Logo_Img" />
          <h2 className="Logo_Name">Nimbledex</h2>
        </div>
        <Search />
      </nav>
    )
  }
});

module.exports = Nav;
