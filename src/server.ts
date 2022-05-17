import express from "express";

const app = express();

app.get('/users',(req,res)=>{
  return res.send("Username : Raimundo Tony")
})
app.listen(3333,()=>{
  console.log('https server running');
})