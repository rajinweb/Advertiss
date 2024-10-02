const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser= require('body-parser');
app.use(bodyParser.json());


const MenuItem = require('./models/MenuItem');
const personRoutes = require('./routes/Person');
const menuRoutes = require('./routes/MenuItem');

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.get('/', function (req, res) {
  res.send('welcome to my website')
});

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('listening to port 3000');
})
