// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import apisRouter from './controllers/api.ts';

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI);
console.log('connected to mongo: ', process.env.MONGO_URI)

// Middleware to parse JSON requests
app.use(express.json());

// ROUTES
app.use('/api', apisRouter)

//Listen
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);

export default app;