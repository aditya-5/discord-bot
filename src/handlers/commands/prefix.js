import Deps from "../../utils/deps.js";
import Command from "./command.js";
import {Guilds} from "../../data/guilds.js"
export default class extends Command{
    name = "prefix";

    constructor(){
        super();
        this.guilds = Deps.get(Guilds);
    }

    async execute (msg, value){
        const savedGuild = await this.guilds.get(msg.author.id)
        if(!value) return await msg.reply(`Prefix is ${savedGuild.prefix}`);
        
        savedGuild.prefix = value[0];
        await savedGuild.save();

        return  msg.reply(`Prefix is ${savedGuild.prefix}`)
    }
}