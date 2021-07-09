import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import postRoutes from './routes/posts.js';
import authRoutes from './routes/authRoutes.js'
import validator from 'email-validator';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get(' /posts', postRoutes);
// app.get('/', (req,res)=> {
//   res.send('Hello to Memories API');
// });

app.use('/auth',authRoutes);

const CONNECTION_URL = 'mongodb+srv://rahul_368:rahul368@cluster0.chbzy.mongodb.net/memory?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL,     {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);




