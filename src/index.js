const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());


app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


route(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})