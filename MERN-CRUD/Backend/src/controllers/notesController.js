import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getallNotes  controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    const note= new  Note({title:title, content: content})
  const savedNote=  await note.save()

    res.status(201).json(savedNote)
  } catch (error) {
    console.error("Error in creteNote controller ", error );
    res.status(500).json({message: "Internal server error"})
    
  }
}











const updateNotes = async (req, res) => {
  try {
    const {title, content}=req.body
  } catch (error) {
    
  }
};















export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully!  " });
}

export { updateNotes };

/*

const updateNotes = async (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
};

export { updateNotes };

*/
