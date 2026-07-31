
import dotenv from 'dotenv';
import app from './app';
import connectDB from './db';
dotenv.config();

connectDB().then(()=>{

  app.listen(process.env.PORT, ()=>{
    console.log('Server started running')
  })

}).catch(error =>{
  console.log("error :", error )
  process.exit(1);
})
