import * as jwt from "jwt-simple"
import * as config from "../config"
export const GenerateToken=(id:string) :string=>{
    const know:number = new Date().getTime();
    return jwt.encode({ id: id, time: know }, config.SecretKey);
}
