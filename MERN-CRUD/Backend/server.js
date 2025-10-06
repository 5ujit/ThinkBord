import express from "express";
// const express = require("express");

const app = express();

app.get("/api/notes",(req,res)=>{
 res.status(200).send("Hello from server")
})

app.post("/api/notes",(req,res)=>{
  res.status(201).send("Post request from server")
 })


app.use(express.json())

app.listen(5006,()=>{
  console.log("your notes has been created successfully ");

  
})
