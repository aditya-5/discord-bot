import { Client, Intents } from 'discord.js';
import {config} from "dotenv";
config({path:".env"})
import { EventHandler } from './handlers/event-handler.js';

export const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

new EventHandler().init();

bot.login(process.env.BOT_TOKEN);