const React = require('react');

const Head = React.createClass({
  render() {
    const imgURL = `http://nimbledex.com/img/sprites/${this.props.idnumber}.png`;

    let stylesheet;
    switch(this.props.stylesheet) {
      case 'entry':
        stylesheet = <link rel="stylesheet" type="text/css" href="/css/EntryPage.css" />;
        break;
      case 'homepage':
        stylesheet = <link rel="stylesheet" type="text/css" href="/css/Homepage.css" />;
        break;
      case '404':
        stylesheet = <link rel="stylesheet" type="text/css" href="/css/404.css" />;
        break;
    }

    return (
      <head>
        <meta charset="utf-8" />
        <title>{this.props.title}</title>
        {stylesheet}
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:type" content="article" />
        <meta property="article:tag" content="Pokemon" />
        <meta property="article:tag" content="Pokedex" />
        <meta property="og:url" content={imgURL} />
        <meta property="og:image" content={`http://nimbledex/img/sprites/${this.props.idnumber}.png`} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nimbledex" />
        <meta name="twitter:creator" content="@mildrenben" />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={`${this.props.idnumber} | Ultra fast, minimal Pokedex with all the important info up front!`} />
        <meta name="twitter:image" content={imgURL} />
        <meta name="description" content="An ultra fast, minimal design Pokedex with all the important Pokemon information up front." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
    )
  }
});

module.exports = Head;
