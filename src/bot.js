import { Client, Intents } from 'discord.js';
import {config} from "dotenv";
import Deps from './utils/deps.js';
import { EventHandler } from './handlers/event-handler.js';
import mongoose from "mongoose";



config({path:".env"})
export const bot = Deps.add(Client, new Client({ intents: [Intents.FLAGS.GUILDS] }));

await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, (error)=>{
      console.log(error ?? "MongoDB Connected")
  });

Deps.get(EventHandler).init();

bot.login(process.env.BOT_TOKEN);