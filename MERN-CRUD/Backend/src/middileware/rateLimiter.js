import ratelimit from "../config/upstash.js"

const rateLimiter= async( req ,res , next)=>{

try {
    const {success}= await ratelimit.limit("my-limit-key")
        
    if(!success){
        return res.staus(429).json({
            message:"Too may requests, please try again later"
        })
    }

    next()
} catch (error) {

    
}


}
export default rateLimiter