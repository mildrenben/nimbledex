var express = require('express');
var app = express();
var port = 8080;

app.use(express.static('prod'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('*', require('./routes').index);

app.listen(port);
console.log('Listening on port: ' + port);
