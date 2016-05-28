const React = require('react');
const Icon = require('./Icon');

const BackToTop = React.createClass({
  render() {
    return (
      <div className="BackToTop">
        <Icon name="up" type="icon" />
      </div>
    )
  }
});

module.exports = BackToTop;
