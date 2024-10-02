const express = require('express')
const Person = require('../models/Person');
const router = express.Router();

router.post('/', async(req, res)=> {
    try{
        const data= req.body; // person data from user
        const newPerson = new Person(data);
        const response= await newPerson.save();
         console.log('Employee data submitted');
        res.status(200).json({
          success: true,
          message: "Some success message",
          data: response
      });
      res.end();

  }catch(err){
    res.status(500).json({error: 'internal server error 500'})
  }

});

router.get('/',  async (req, res)=> {
    try{  
      const data= await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
      console.log('Error', err);
      res.status(500).json({error: 'internal server error 500'})
    }
});


// parameterized API url :
router.get ('/:workType', async(req, res)=>{
    try{
      const workType = req.params.workType; // // Extract the work type from the URL parameter
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
        const response= await Person.find({work: workType})
        console.log('response fetch');
        res.status(200).json(response)
      }else{
        res.status(404).json({error:"Invalid work type"});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

//update:
router.put ('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;      // Extract the work type from the URL parameter
        const updatedPersonData=req.body;   // update data for the person

        const response= await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new:true,  // Return the update document
            runValidators:true // Run mangoose validation
        })
       
        if(!response){
         return res.status(404).json({error:"Invalid work type"});
        }

      console.log('response fetch');
      res.status(200).json(response)

    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  //delete:
router.delete ('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;      // Extract the work type from the URL parameter
        const response= await Person.findByIdAndDelete(personId);
       
        if(!response){
         return res.status(404).json({error:"Invalid work type"});
        }

      console.log('Person deleted');
      res.status(200).json(response)

    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  module.exports=router;
