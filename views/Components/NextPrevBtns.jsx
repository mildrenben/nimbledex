const React = require('react');

const NextPrevBtns = React.createClass({
  render() {
    return (
      <div className="NextPrevBtns">
        { this.props.prev !== 0 &&
        <a href={this.props.prev} className="NextPrevBtns_Btn NextPrevBtns_Btn--prev">
          Prev
        </a> }
        { this.props.next !== 722 &&
        <a href={this.props.next} className="NextPrevBtns_Btn NextPrevBtns_Btn--next">
          Next
        </a> }
      </div>
    );
  },
});

module.exports = NextPrevBtns;
