import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
import dotenv from "dotenv"

dotenv.config();
const PORT= process.env.PORT || 5001

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(PORT, () => {
  console.log("Server started on PORT:",PORT);
});


//src>> server.js