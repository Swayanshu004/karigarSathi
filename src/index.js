import 'dotenv/config'
import express from 'express'
import pool from './database/db.js'

const app = express()
app.use(express.json())


app.listen(process.env.PORT,()=>console.log(`Server started on localhost:${process.env.PORT}`))