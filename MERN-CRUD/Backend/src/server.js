import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5006, () => {
  console.log("your notes has been created successfully ");
});
