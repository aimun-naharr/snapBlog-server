import express from 'express';
import bodyParser from 'body-parser';
import postRoute from './routes/postRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app=express()

// middlewares
const corsOptions ={
  origin:'http://localhost:5173/', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }))

app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
 });
 app.use('/api/posts', postRoute)
 app.use('/api/auth', userRoute)
 
export default app