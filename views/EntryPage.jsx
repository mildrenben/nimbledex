const React = require('react');
const Nav = require('./Nav/Nav');
const Id = require('./entry/Id/Id');
const Evol = require('./entry/Evol/Evol');
const Details = require('./entry/Details/Details');

const Root = React.createClass({
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/css/entry.css" />
          <link rel="stylesheet" type="text/css" href="/css/awesomplete.css" />
          <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css' />
        </head>
        <body>
          <Nav />
          <main>
            <Id name={this.props.name} idnumber={this.props.id} types={this.props.types} />
            <Evol evol={this.props.evol} />
            <Details
              abilities={this.props.abilities}
              catchRate={this.props.catchRate}
              hatchCounter={this.props.hatchCounter}
              ev={this.props.ev}
              stats={this.props.stats} />
          </main>
          <script src="/js/script.js"> </script>
          <script src="/js/awesomplete.min.js"> </script>
          <script src="/js/typeahead.js"> </script>
        </body>
      </html>
    )
  }
});

module.exports = Root;
