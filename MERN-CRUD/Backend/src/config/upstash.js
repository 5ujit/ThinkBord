// config/upstash.js
import pkg from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

const { Ratelimit } = pkg; // ✅ extract from default import

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});

export default ratelimit;


// config>>upstash.js