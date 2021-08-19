import {bot} from "../bot.js";
import { readdirSync } from "fs";

export default class CommandHandler{

    commandsMap = new Map();

    async init(){
        const fileNames = readdirSync("./src/handlers/commands/");
        for (const name of fileNames) {
            const {default: Command} = await import(`./commands/${name}`)
            const command = new Command();
            if(!command.name) continue;

            this.commandsMap.set(command.name, command)
        }
    }

    async handle(prefix, msg){

        try{
            const words = msg.content.slice(prefix.length).split(" ");
            await this.commandsMap.get(words[0]).execute(msg, words.slice(1))
        }catch(error){
            await msg.reply(error.message)
        }
        


    }

}