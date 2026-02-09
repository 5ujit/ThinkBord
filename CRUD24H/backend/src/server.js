import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();


console.log(process.env.MONGO_URI);

const app = express();


connectDB();
const PORT = 5001;

app.use("/api/notes", notesRouter);

app.listen(5001, () => {
  console.log(`server started on port : ${PORT}`);
});
