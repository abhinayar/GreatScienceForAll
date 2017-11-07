// import dependencies
var express = require('express'), // Used for routing https://expressjs.com/
path = require('path'), // allows path combinations https://www.npmjs.com/package/path
logger = require('morgan'), // logs errors and output to terminal during node run https://www.npmjs.com/package/morgan
pug = require('pug'), // pug/jade templating language https://www.npmjs.com/package/pug
port = process.env.PORT || 3000;

// app internal setup
var app = express(); // sets app to use express
app.set('views', path.join(__dirname, 'views')); // sets up view directory
app.set('view engine', 'pug'); // sets view engine to use pug
app.use(logger('dev')); // uses morgan/logger to log output to terminal
app.use(express.static(path.join(__dirname, 'public'))); // sets static file directory path

app.get('/', function(req, res, next) {
  res.render('home', {});
})

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error: ' + err.message + ' | ' + err);
  });
}

// serve the app on PORT variable
// if using Heroku, this will be automatically set
// AWS/Azure I'm not sure : TODO
var server = app.listen(port, function(err) {
  if (err) {
    console.log('App listening error ', err);
  } else {
    console.log('App running at ', port)
  }
});
