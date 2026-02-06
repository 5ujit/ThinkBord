import express from "express";
import notesRouter from "./routes/notesRoutes.js"


const app = express();

const PORT = 5001;

app.use("/api/notes",notesRouter);




app.listen(5001, () => {
  console.log(`server started on port : ${PORT}`);
});
