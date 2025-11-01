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















/*

const updateNotes = async (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
};

export { updateNotes };

*/
