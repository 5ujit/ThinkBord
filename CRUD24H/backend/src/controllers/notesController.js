import Note from "../models/Notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });
    await newNote.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    console.error("Error in createNote controller ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "notes Updated successfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "notes Deleted  successfully" });
}

//backend>src> controllers>file notesController.js
