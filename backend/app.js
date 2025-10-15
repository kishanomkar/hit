import express from 'express'
import connect from './db/db.js'
import cookieParser from 'cookie-parser'
import { cookie } from 'express-validator'
import womenRoutes from './routes/women.route.js'
import sosRoutes from './routes/sos.route.js'

import cors from 'cors';


connect()

const app= express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.get('/',(req,res)=>{ 
    res.send("Hello World")
})
 
app.use("/api/women",womenRoutes) 
app.use("/api/emergency",sosRoutes)

export default app
