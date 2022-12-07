import express from 'express';
import bodyParser from 'body-parser';
import postRoute from './routes/postRoute.js'
import cors from 'cors'

const app=express()

// middlewares
app.use(cors())
app.use(bodyParser.json({limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }))

app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
 });
 app.use('/api/posts', postRoute)
 
export default app