import express from "express";

import { getAllNotes,createNotes,updateNotes,deleteNotes, getNoteById } from "../controllers/notesController.js";
// import {  } from "../../routes/controllers/notesController.js";

const router = express.Router();

export default router;
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);





/*
app.get("/api/notes", (req, res) => {
 
});

app.post("/api/notes", (req, res) => {

});

app.put("/api/notes/:id", (req, res) => {

});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "note  deleted  successfully!" });
});



*/
