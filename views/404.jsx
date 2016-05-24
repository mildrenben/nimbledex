const React = require('react');
const Nav = require('./Nav/Nav');
const Info = require('./Components/Info');

const page404 = React.createClass({
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/css/404.css" />
          <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css' />
        </head>
        <body className="page404">
          <Nav />
          <main>
            <div className="MissingnoWrap">
              <img src="/img/sprites/missingno.png" />
              <h5>Missingno</h5>
            </div>
            <p>We could not find the Pokémon you were looking for</p>
            <Info />
          </main>
          <script src="/js/script.js"> </script>
          <script src="/js/awesomplete.min.js"> </script>
          <script src="/js/typeahead.js"> </script>
        </body>
      </html>
    )
  },
});

module.exports = page404;
