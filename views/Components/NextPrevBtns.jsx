const React = require('react');

const NextPrevBtns = React.createClass({
  render() {
    return (
      <div className="NextPrevBtns">
        <a href={this.props.prev} className="NextPrevBtns_Btn NextPrevBtns_Btn--prev">
          Prev
        </a>
        <a href={this.props.next} className="NextPrevBtns_Btn NextPrevBtns_Btn--next">
          Next
        </a>
      </div>
    );
  },
});

module.exports = NextPrevBtns;
