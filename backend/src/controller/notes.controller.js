// backend>src> controller> notes.controller.js
import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc , order (newest first )
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById Noes controller ", error);
    res.status(500).json({ message: "" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal sever error " });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!updateNote) {
      return res.status(404).json({ message: "Note not found " });
    }

    res.status(200).json(updateNote);
  } catch (error) {
    console.error("Error in updateNote controler ", error);
    res.status(500).json({ message: " " });
  }
}

export async function deleteNote(req, res) {
  try {
    await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "" });
  }
}

//1:26
