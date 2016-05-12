const React = require('react');
const Icon = require('./Icon');

const Search = React.createClass({
  render() {
    return (
      <div className="Search">
        <input className="Search_Input" placeholder="Search..."/>
        <button className="Search_Btn">
          <Icon name="search" type="icon" />
        </button>
      </div>
    )
  }
});

module.exports = Search;
