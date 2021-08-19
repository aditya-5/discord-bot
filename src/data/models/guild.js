import mongoose from "mongoose";

export const SavedGuild = mongoose.model("guild", new mongoose.Schema({
    _id: {type: String, required: true},
    prefix: {type: String, default:"."}
}))