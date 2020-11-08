import {Application,Request,Response} from "express"
import bodyParser from "body-parser"
import * as api from "../controllers/Authentication"

export const router= (app:Application)=>{
    const parser=bodyParser.json();
    app.route('/req-code').post(parser,api.reqcode);
    app.route('/get-token').post(parser,api.reqcode);
};