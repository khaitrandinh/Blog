const path = require('path')
const express = require('express');
const {engine} = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'Public')));

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

console.log('PATH:',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
