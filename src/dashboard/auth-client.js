import OAuthClient from "disco-oauth";
import {config} from "dotenv";
config({path:"../.env"})

const client = new OAuthClient(process.env.BOT_ID, process.env.BOT_SECRET);
client.setRedirect(`http://localhost:3000/auth`)
client.setScopes("identify", "guilds")

export { client }