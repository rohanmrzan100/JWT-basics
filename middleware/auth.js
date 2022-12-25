const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleWare = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        res.status(400).json({error:"No token provided "})
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {name,id}= decoded
        req.user = {name,id,token}
        next()
   } catch (error) {
    res.status(400).json({error:"error in token validation/auth middleware"})
   }
}



module.exports = authMiddleWare