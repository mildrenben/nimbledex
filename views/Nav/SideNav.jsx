const React = require('react');

const SideNav = React.createClass({
  render() {
    const navItems = this.props.navItems.map((item) => {
      return (
        <li className="SideNav_Link">
          <a href={item.link}>{item.name}</a>
        </li>
      )
    });

    return (
      <div className="SideNav">
        <ul>
          {navItems}
        </ul>
      </div>
    )
  },
});

module.exports = SideNav;
