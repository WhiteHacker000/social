import jwt from "jsonwebtoken"

const isAuth=async (req,res,next)=>{
   try {
       // Debug: log incoming cookies and origin to help trace missing token issues
       console.log('isAuth - cookies:', req.cookies, 'Origin:', req.get('Origin'))

       const token=req.cookies.token
       if(!token){
           console.log('isAuth - token not found on request')
           return res.status(400).json({message:"token is not found"})
       }

  const verifyToken=await jwt.verify(token,process.env.JWT_SECRET)  
  
  req.userId=verifyToken.userId

  next()

   } catch (error) {
       console.log('isAuth error:', error)
       return res.status(500).json({message:`is auth error ${error}`})
   }
}

export default isAuth