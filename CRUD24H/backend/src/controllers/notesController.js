import Note from "../models/Notes.js"

export async function getAllNotes(req, res) {
 try {
  const notes = await Note.find()
  res.status(200).json(notes)
 } catch (error) {

  res.status(500).json({message:"Internal server error"})  
 }
}

export function createNotes(req, res) {
  res.status(201).json({ message: "post created successfully!" });
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "notes Updated successfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "notes Deleted  successfully" });
}
