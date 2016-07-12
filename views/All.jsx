const React = require('react');
const Nav = require('./Nav/Nav');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const FootScripts = require('./Components/FootScripts');
const BackToTop = require('./Components/BackToTop');
const ListItem = require('./All/ListItem');

const All = React.createClass({
  render() {
    const items = this.props.arr.map((mon) => {
      return <ListItem mon={mon} />;
    });
    const sideNavItems = [
      { name: '#100', link: '#100' },
      { name: '#200', link: '#200' },
      { name: '#300', link: '#300' },
      { name: '#400', link: '#400' },
      { name: '#500', link: '#500' },
      { name: '#600', link: '#600' },
      { name: '#700', link: '#700' },
    ];
    return (
      <html>
        <Head title='All Pokemon | Nimbledex' name='All' idnumber='001' stylesheet="all" />
        <body className="All">
          <Nav sideNavItems={sideNavItems} />
          <main>
            <div className="AllList">
              <div className="AllListHeader">
                <div className="AllListHeader_Id">#</div>
                <div className="AllListHeader_Name">Name</div>
                <div className="AllListHeader_Types">Types</div>
                <div className="AllListHeader_Stats">
                  <div className="AllListHeader_Stat">HP</div>
                  <div className="AllListHeader_Stat">Atk</div>
                  <div className="AllListHeader_Stat">Def</div>
                  <div className="AllListHeader_Stat">Sp Atk</div>
                  <div className="AllListHeader_Stat">Sp Def</div>
                  <div className="AllListHeader_Stat">Spe</div>
                  <div className="AllListHeader_Stat">BST</div>
                </div>
              </div>
              {items}
            </div>
          </main>
          <BackToTop />
          <Info />
          <FootScripts />
        </body>
      </html>
    );
  }
});

module.exports = All;
