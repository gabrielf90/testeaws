import express from 'express'
import nodemon from 'nodemon'

const app = express()

app.get("/", (req,res)=>{
    return res.json({message:"servidor on"})
})

app.listen(8000)