const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

console.log(path.resolve('views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));

const names = ['Jason', 'Tom', 'Nick', 'Amelia'];

app.get('/', function (request, response) {
  response.render('index');
});

app.post('/names', function (request, response) {
  console.log(request.body);

  names.push(request.body.name);

  // response.render('names', { name: request.body.name, names });
  response.redirect('/');
});

app.get('/names/:name_index', function (request, response) {
  console.log(request.params.name_index);
  response.send(names[request.params.name_index]);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
