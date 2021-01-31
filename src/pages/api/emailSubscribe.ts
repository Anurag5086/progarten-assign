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
        console.log("Its a success")
    }else{
        res.status(404).json("Email not valid");
    }
}catch(e){
    res.status(404).json("some errroro");
}

}