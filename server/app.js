import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Routes...

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
//     .catch(err => console.log(err.message));

