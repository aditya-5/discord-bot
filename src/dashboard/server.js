import express from 'express';
import path from 'path';
import CommandHandler from '../handlers/command-handler.js';
import Deps from '../utils/deps.js';
const __dirname = path.resolve();
const app = express()

app.set("views", __dirname+"/src/dashboard/views")
app.use(express.static(`${__dirname}/src/dashboard/views/`));
app.set("view engine", "pug")

app.get('/',  (req, res)=>{
  res.render('index', {subtitle:"Homepage"})
})


app.get('/commands',  (req, res)=>{
    res.render('commands', {subtitle:"Commands", categories: [
        {name:'Economy', icon:"fas fa-coins"},
        {name:'General', icon:"fas fa-gavel"},
        {name:'Music', icon:"fas fa-music"},
        {name:'Auto Mod', icon:"fas fa-star"}],
        commands: Array.from(Deps.get(CommandHandler).commandsMap.values())
    })
  })


 
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("SERVER IS RUNNING")
})