export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export function createNote ( req, res){
    res.status(201).json({messge:"Note created successfully !"});
}

export function updateNote (req, res){
    res.status(200).json({message: "Note update successfully"})
}


export function deleteNote (req, res){
    res.status(200).json({message: "Note deleted successfully !"})
}



