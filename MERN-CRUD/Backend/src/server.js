import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
import dotenv from "dotenv";
import rateLimiter from "./middileware/rateLimiter.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

// middleware /
app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

// >>>  src >> server.js
