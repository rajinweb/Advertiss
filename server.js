const express = require('express')
const app = express();
const db = require('./db');
const path = require('path');
require('dotenv').config();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const personRoutes = require('./routes/Person');
const menuRoutes = require('./routes/MenuItem');

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('listening to port 3000');
})
