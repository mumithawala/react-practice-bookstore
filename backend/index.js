import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express()

dotenv.config()
const PORT = process.env.PORT || 4000
const URI = process.env.MONGODB_URI
//connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  console.log('Connected to MongoDB')
} catch (error) {
  console.log('Error:', error.message)
}


app.get('/', (req, res) => {
  res.send('Mern stack!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})