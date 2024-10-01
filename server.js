const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser= require('body-parser');
app.use(bodyParser.json());


const MenuItem = require('./models/MenuItem');
const personRoutes = require('./routes/Person');

app.use('/person', personRoutes);

app.post('/menu', async (req, res)=> {
    try{
      const data= req.body; // New MenuItem data from user
      const newMenuItem= new MenuItem(data);
      const response= await newMenuItem.save();
      console.log('MenuItem data saved');
      res.status(200).json(response);
    }catch(err){
      console.log('Error', err);
      res.status(500).json({error: 'internal server error 500'})
    }
});

app.get('/menu', async (req, res) =>{
  try{
      const data = await MenuItem.find();
      console.log('data fetched'); 
      res.status(200).json(data) ;
    }catch(err){
      console.log (err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })



app.get('/', function (req, res) {
  res.send('welcome to my website')
});

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('listening to port 3000');
})
