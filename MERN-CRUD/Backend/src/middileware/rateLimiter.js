const rateLimiter = (req, res, next) => next();

export default rateLimiter;


/*
import { errors } from "@upstash/redis";
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      return res.status(429).json({
        message: "Too may requests, please try again later" });
    }

    next();
  } catch (error) {
    console.error("Rate limit error ", error);
    next(error);
    
  }
};
export default rateLimiter;

*/

//src> middileware>> rateLimiter.js