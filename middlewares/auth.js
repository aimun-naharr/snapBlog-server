import jwt from "jsonwebtoken";

export const auth=async(req, res, next)=>{
        try {
                const token=req.headers.authorization.split(" ")[1]
               
                // if(!token) return res.status(401).json({msg: 'forbidden access'})
                let decodedData;
                decodedData=jwt.verify(token, process.env.JWT)
                req.userId=decodedData?.id
                
                next()
        } catch (error) {
                console.log(error)
        }
}