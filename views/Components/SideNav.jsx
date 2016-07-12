const React = require('react');

const SideNav = React.createClass({
  render() {
    return (
      <div className="SideNav">
        <ul>
          <li><a href="">#100</a></li>
          <li>#200</li>
          <li>#300</li>
          <li>#400</li>
          <li>#500</li>
          <li>#600</li>
          <li>#700</li>
        </ul>
      </div>
    )
  },
});

module.exports = SideNav;
