import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middileware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;




app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


// middleware /
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    // console.log(`📘 Notes API: http://localhost:${PORT}/api/notes`);
  });
});

// >>>  src >> server.js
