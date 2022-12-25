const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req,res)=>{
    try {
         const {name,password} = req.body
         if(!name || !password){
            res.status(400).json({message:"No userName or password"})
        }
        const id = new Date().getDate()
        const token = jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:'30d'})
        console.log(req.headers);


         res.status(200).json({msg:"user Created",token:token})
    } catch (error) {
        res.status(400).json({msg:"error"})
    }
}


const dashboard = async (req,res)=>{
    try {
        console.log(req.user);
        res.status(200).json({msg:`hello, ${req.user.name}`,token:`Your token is ${req.user.token}`})
    } catch (error) {
        res.status(400).json({error:"error in dashboard"})
        
    }
   
}



module.exports = {
    login,
    dashboard
}