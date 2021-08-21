import express from 'express';
import CommandHandler from '../../handlers/command-handler.js';
import Deps from '../../utils/deps.js';
import {config} from "dotenv";
config({path:"../../../.env"})
import {client as authClient} from "../auth-client.js"
const router = express.Router()

router.get("/login", (req,res)=>res.redirect(`https://discord.com/api/oauth2/authorize?response_type=code&client_id=${process.env.BOT_ID}&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=${process.env.DASHBOARD_URL}auth&prompt=consent`))

router.get("/auth", async (req,res)=>{
    const code = req.query.code
    console.log(authClient)
    const key = await authClient.getAccess(code)
    res.send(key)
})


export {router}
