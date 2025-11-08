import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
import dotenv from "dotenv";
import rateLimiter from "./middileware/rateLimiter.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware /
app.use(express.json());

app.use(rateLimiter)



app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
