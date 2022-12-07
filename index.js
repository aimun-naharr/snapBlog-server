import app from "./app.js";
import mongoose from 'mongoose';

const PORT=process.env.PORT|| 5000

const CONNECTION_URL='mongodb+srv://snapBlog-admin:KmLefQrFXWBkEl1W@cluster0.n3pgyaj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
   .then(()=>app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`)
   })).catch((error)=>console.log(error.message))

   
