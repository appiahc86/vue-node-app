import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

//database connection
mongoose.Promise = global.Promise;
//Database Connection
mongoose.connect(
'mongodb://localhost:27017/fullstack',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
    .then(db =>  console.log('Database Connected'))
    .catch(error => console.log(error));

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

import postRouter from './routes/api/posts.js';

app.use('/api/posts', postRouter);


app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})