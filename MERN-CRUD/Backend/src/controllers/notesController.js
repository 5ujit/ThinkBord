export async function getAllNotes(req, res) {
  res.status(200).send("Yes you fetched the notes ");
}

export async function createNote(req, res) {
  res.status(500).json({ message: "Notes created successfully" });
}
const updateNotes = async (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
};

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully!  " });
}

export { updateNotes };









export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}







/*

const updateNotes = async (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
};

export { updateNotes };

*/
