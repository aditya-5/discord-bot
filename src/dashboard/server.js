import express from 'express';
import path from 'path';
import {router as rootRoutes} from "./routes/root-routes.js"
import {router as authRoutes} from "./routes/auth-routes.js"
import cookies from "cookies"
const __dirname = path.resolve();
const app = express()

app.set("views", __dirname+"/src/dashboard/views")
app.use(express.static(`${__dirname}/src/dashboard/views/`));
app.set("view engine", "pug")
app.use(cookies.express(""))
app.use("/", rootRoutes, authRoutes)

app.get("*", (req, res)=>{
  res.render("404 : Page Does not Exist")
})
 
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("SERVER IS RUNNING")
})