import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express()

app.set("views", __dirname+"/src/dashboard/views")
 
app.get('/',  (req, res)=>{
  res.render('index.pug')
})


 
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("SERVER IS RUNNING")
})