import express from 'express'
import { connectDB } from '../config/db.js'

const app =express()

app.listen(3000, ()=>{
   connectDB();
    console.log('server up and running on port 3000')
})

