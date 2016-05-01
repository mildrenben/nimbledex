var React = require('react');

var Search = React.createClass({
  render() {
    return (
      <div className="Search">
        <input className="Search_Input" />
        <button className="Search_Btn">Search</button>
      </div>
    )
  }
});

module.exports = Search;
