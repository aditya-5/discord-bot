import { SavedGuild} from "./models/guild.js";

export  class Guilds{
    async get(id){
        return await SavedGuild.findById(id) ?? SavedGuild.create({"_id": id, "prefix" : "."})
    }

    // async set(id, prefix){
    //     return await SavedGuild.findOneAndUpdate(id) ?? SavedGuild.create({"_id": id, "prefix" : "."})
    // }

    
}