import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(5006, () => {
  console.log("your notes has been created successfully ");
});


