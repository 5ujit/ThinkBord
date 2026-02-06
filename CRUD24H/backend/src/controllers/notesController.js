export function getAllNotes(req, res) {
  res.status(200).send("you just fetech the notes ");
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
