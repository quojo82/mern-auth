import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup =async(req, res, next)=>{
      const {username, email, password} =req.body;
      const hashedPassword =bcryptjs.hashSync(password, 10) 
      const newUSer = new User({username, email, password:hashedPassword})
      
      try{
        await newUSer.save() 
        res.status(201).json({message: "User created successfully"})
      } catch(error){
        /*res.status(500).json({
            message:"There is an Error"
        }) */

        //calling the error handler
        next(error)
      }
      
}
 