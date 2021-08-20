import { SavedGuild} from "./models/guild.js";

export  class Guilds{
    async get(id){
        return await SavedGuild.findById(id) ?? SavedGuild.create({"_id": id, "prefix" : "."})
    }


    
}