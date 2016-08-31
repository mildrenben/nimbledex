const React = require('react');
const NextPrevBtns = require('./NextPrevBtns');

const Info = React.createClass({
  render() {
    const currentNum = parseInt(this.props.id);
    const prev = currentNum - 1;
    const next = currentNum + 1;

    return (
      <div className="Info">
        {this.props.id && <NextPrevBtns prev={prev} next={next}/>}
        <span className="Info_Toggle">Info</span>
        <div className="Info_Popup">
          <p>Nimbledex is an open source Pokedex built for Pokemon Showdown.</p>
          <p>The data is for ORAS and I will try to always keep the data consistent with the latest game.</p>
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
