const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('./server/middleware/logger');
const port = process.env.PORT || 8000;
const app = express();


// console.log('logger', logger);

// console.log(path.resolve('views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (request, response, next) {
  console.log('inside middleware');
  console.log(next);

  next();
});

app.use(stateful({}));

function stateful(options) {
  console.log('invoking state', options);
  return function (request, response, next) {
    console.log('running stateful middleware')

    // /admin [read write]
    if (options.doStuff) {
      // do stuff
      console.log(new Date())
    }
    else {
      // do other stuff
      request.date = new Date();
      console.log('else based on state optiosn');
    }

    next(new Error('no way!'));
  };
}

const names = ['Jason', 'Tom', 'Nick', 'Amelia'];

app.use(logger);




app.get('/', function (request, response) {
  console.log('index', request.date);
  response.render('index');
});


// hypothetical middleware to protect our routes
app.post('/names', /** [authMiddleware, moreMiddleware], */ function (request, response) {
  console.log(request.body);

  names.push(request.body.name);

  response.render('names', { name: request.body.name, names });
  // response.redirect('/');
});

app.get('/names/:name_index', function (request, response) {
  console.log(request.params.name_index);
  response.send(names[request.params.name_index]);
});

app.use(function (error, request, response, next) {
  console.log(error.message);
  // log error to db;
  next(error);
});

app.use(function (error, request, response, next) {
  console.log('error second', error.message);

  response.send('something went wrong');
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));
