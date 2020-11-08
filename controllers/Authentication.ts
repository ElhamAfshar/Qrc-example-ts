import * as mongoose from "mongoose"
import {Request , Response} from "express"

import {User}  from "../models/user"
import {GenerateToken} from '../services/token'
//import * as Tell from '../services/telephone'
//import * as pnumber from "pnumber"
import * as redis from "../services/redis"
import * as random from "../services/random"
import * as config from "../config"

const genResp =(_id :mongoose.Types.ObjectId, code :String, res :Response)=> {
    
    redis.GetVal(_id.toHexString()).then(val=>{
        val===code? res.status(200).json(GenerateToken(_id.toHexString())):res.status(422).json({error:"your code is not valid"})
    });
}



export const reqcode = async(req:Request, res:Response) => {
    const {firstname , lastname  , phoneNumber } =req.body
    
    phoneNumber=="" ? res.status(400).json("Phone number is not valid"):console.log(phoneNumber);
    
    try {
        let findedUsr = await User.findOne({phoneNumber}).exec();
        if (!findedUsr) {
            const user=new User({
                firstname:firstname,
                lastname:lastname,
                phoneNumber:phoneNumber
            })
             await user.save().then(userSaved => {
                 findedUsr=userSaved;
                })
        }

        if (findedUsr){
            const sendedSms = await redis.GetVal(findedUsr._id.toHexString());
            if (sendedSms) {
                return res.status(422).send({ error: "please try after 1min" });
            } else {
                const genCode = random.RandomBetween(config.MinNumber , config.MaxNumber);
                await redis.SetEx(findedUsr._id.toString() , genCode.toString() , config.SmsExpireTime);
    
                //todo sending code via sms
    
    
                return res.status(200).json("success" );
           }   
        }
        
    } catch (error) {
        console.log("err", error)
    }
}

export const getToken = async(req:Request, res:Response) => {
    const {code , phoneNumber} = req.body;
    //let phone = pnumber.toEnglishDigits(phoneNumber);
    //phone = Tell.phoneMobile(phone);
  
   // if (phone === "number is not valid") {
   //   return res.status(422).send({ error: "your phone number is not ok!" });
   // }
    try {
       await User.findOne({phoneNumber}).exec().then(userFind=>{
            return userFind ? genResp(userFind._id , code , res) : res.status(422).json({error:"something is wrong...!"})
        })
       
 
    } catch (error) {
        console.log(error)
        res.status(422).send({error:"something is wrong"})
    }
}