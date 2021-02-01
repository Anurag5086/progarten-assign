import { NextApiRequest, NextApiResponse } from "next";
import Email from '../../../models/email'
import initDB from '../../../helpers/initDB'

initDB();

export default function EmailSubscribe(req: NextApiRequest, res: NextApiResponse){
    try{
    
    if(req.body.email){
        const email = new Email({
            email: req.body.email
        }).save();
        res.status(200).json({result: "Subscribed Succesfully!"});
    }else{
        res.status(404).json({result: "Email Invalid"});
    }
}catch(e){
    res.status(404).json({result: e});
}

}