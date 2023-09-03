const express  = require("express")
const app = express()
const PROT = process.env.PROT | 3001;

app. get('/', (req,res)=>{

    res.json({message: "Backend application for new version"})
})

app.listen(PROT,()=>{
console.log("Server is connected on", PROT)
})