import Event from "./event.js";
import {bot} from "../../bot.js";
import CommandHandler from "../command-handler.js";
import Deps from "../../utils/deps.js"

export default class extends Event{
    on = "ready";

    constructor(){
        super();
        this.commandHandler = Deps.get(CommandHandler);
    }

    async invoke (){
        console.log(`${bot.user.username} IS ONLINE`);

        await this.commandHandler.init();
    }
}