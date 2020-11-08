import {clientRedis} from "../index"
// const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);

export const SetEx= (userId:string , val:string , time:number)=>{
     clientRedis.set(userId,  val, "ex" ,time);
}

export const GetVal = (userId: string):Promise<string|null>=> {
    return clientRedis.get(userId)
}