import Express from "express"
import * as mongoose from "mongoose"
import {router} from "./routes/route"
import Redis from "ioredis"



mongoose.connect('mongodb://localhost/QRC', {useNewUrlParser: true});
const app =Express()
export const clientRedis = new Redis();
 
const port =3000;

router(app);

app.listen(port,()=>{
    console.log("strat server ...");
    
})