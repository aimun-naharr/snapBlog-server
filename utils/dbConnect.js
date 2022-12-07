import mongoose from "mongoose"
import app from "../app"

const CONNECTION_URL='mongodb+srv://blog-admin:HOCZhy4okuJGNqDJ@cluster0.kd84lhn.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
   .then(()=>app.listen())


   KmLefQrFXWBkEl1W
   snapBlog-admin