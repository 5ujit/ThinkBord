import express from "express";
import notesRouter from "./routes/notesRoutes.js"


const app = express();

const PORT = 5001;

app.use("/api/notes",notesRouter);

/*
app.get("/api/notes", (req, res) => {
  res.status(200).send("your got 10 notes ");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "post created successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "post updated successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "note  deleted  successfully!" });
});



*/


app.listen(5001, () => {
  console.log(`server started on port : ${PORT}`);
});
