import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const userAuth = async(req,res,next)=>{
    const {token} = req.cookies;
    if(token){
        const decode = jwt.decode(token,'secret');
        const user = await User.findById(decode.id);  
        
        if(!user){
            return res.redirect('/login');
        }

        req.user = user;        
        res.locals.user = user;
   
        return next();
    }

    return res.redirect(`/login`);
}

export default userAuth;