const React = require('react');

const Info = React.createClass({
  render() {
    return (
      <div className="Info">
        <input type="checkbox" className="Info_Toggle" />
        <div className="Info_Popup">
          This is an open source Pokedéx made for the community.
          The data is for X & Y and ORAS.
          It is meant to be concise, minimal and fast.
          If you want to help the project please talk to me on Twitter or Github.
          <a href="http://www.google.com">Github</a>
          <a href="https://twitter.com/mildrenben">Twitter</a>
        </div>
      </div>
    )
  }
});

module.exports = Info;
