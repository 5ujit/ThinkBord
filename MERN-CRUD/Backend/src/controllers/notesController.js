export function getAllNotes ( req, res){
    res.status(200).send("you just fetech the notes");
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



