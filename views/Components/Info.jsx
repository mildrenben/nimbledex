const React = require('react');

const Info = React.createClass({
  render() {
    return (
      <div className="Info">
        <input type="checkbox" className="Info_Toggle" />
        <div className="Info_Popup">
          <p>This is an open source Pokedéx made for the community.</p>
          <p>The data is for ORAS and I will try to always keep the data conistent with the latest game.</p>
          <p>It is meant to be concise, minimal and fast.</p>
          If you want to help the project please talk to me on Twitter or Github.
          <a href="https://github.com/mildrenben/nimbledex">Github</a>
          <a href="https://twitter.com/mildrenben">Twitter</a>
        </div>
      </div>
    )
  }
});

module.exports = Info;
