import express from "express"

const app =express();

app.get("/api/notes",(req,res)=>{
    res.send("yoou got 5 notes from the server")
})



app.post("/api/notes",(req,res)=>{
    res.send("note is added successfully")
})

app.post("/api/notes",(req,res)=>{
    res.send("note is added successfully")
})

app.post("/api/notes",(req,res)=>{
    res.send("note is added successfully")
})

app.listen(5001,()=>{
    console.log("server started on port : 5001");
    
})