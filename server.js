const express = require('express')
const app = express();
const path = require('path');
require('dotenv').config();

const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

require('./db');


const personRoutes = require('./routes/Person');
const menuRoutes = require('./routes/MenuItem');
const passport = require('./auth');

//middleware 
/*
const logRequest=(req, res, next)=>{
  console.log(`[${new Date().toLocaleString}] request mode to : ${req.originalUrl}`)
  next();
}
app.use(logRequest);
*/
app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local', {session: false})

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.get('/', localAuthMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('listening to port 3000');
})
