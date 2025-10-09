import express from 'express'
import connect from './db/db.js'
import cookieParser from 'cookie-parser'
import { cookie } from 'express-validator'
import womenRoutes from './routes/women.route.js'


connect()

const app= express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use("/api/women",womenRoutes)

export default app
