const React = require('react');
const Nav = require('./Nav/Nav');
const Info = require('./Components/Info');
const Head = require('./Components/Head');
const BackToTop = require('./Components/BackToTop');
const ListItem = require('./All/ListItem');

const All = React.createClass({
  render() {
    const items = this.props.arr.map((mon) => {
      return <ListItem mon={mon} />;
    });
    return (
      <html>
        <Head title='All Pokemon | Nimbledex' name='All' idnumber='001' stylesheet="all" />
        <body className="All">
          <Nav />
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
          <script src="/js/all.js"> </script>
        </body>
      </html>
    );
  }
});

module.exports = All;
