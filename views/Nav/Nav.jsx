var React = require('react');
var Search = require('../Components/Search');

var Nav = React.createClass({
  render: function() {
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
