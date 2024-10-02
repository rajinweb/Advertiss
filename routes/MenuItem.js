const express = require('express')
const MenuItem = require('../models/MenuItem');
const router = express.Router();

router.post('/menu', async (req, res)=> {
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

router.get('/menu', async (req, res) =>{
  try{
      const data = await MenuItem.find();
      console.log('data fetched'); 
      res.status(200).json(data) ;
    }catch(err){
      console.log (err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  module.exports=router;