import express from 'express';
import CommandHandler from '../../handlers/command-handler.js';
import Deps from '../../utils/deps.js';

const router = express.Router()
router.get('/',  (req, res)=>{
    res.render('index', {subtitle:"Homepage"})
  })
  
  
router.get('/commands',  (req, res)=>{
    // console.log(JSON.stringify(Array.from(Deps.get(CommandHandler).commandsMap.values())))
    // console.log( JSON.stringify(Object.fromEntries(Deps.get(CommandHandler).commandsMap)))
      res.render('commands', {subtitle:"Commands", categories: [
          {name:'Economy', icon:"fas fa-coins"},
          {name:'General', icon:"fas fa-gavel"},
          {name:'Music', icon:"fas fa-music"},
          {name:'Auto Mod', icon:"fas fa-star"}],
          commands: Array.from(Deps.get(CommandHandler).commandsMap.values()),
          commandsString:JSON.stringify(Array.from(Deps.get(CommandHandler).commandsMap.values()))
      })
    })
  
export {router}