import express from 'express'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";
// mongoose.connect('mongodb+srv://vineeth8472:<password>@cluster0.sycmfry.mongodb.net/?retryWrites=true&w=majority');

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect('mongodb+srv://vineeth8472:o4b9mBjsXBrosmhI@cluster0.sycmfry.mongodb.net/?retryWrites=true&w=majority');


const app = express()
app.use(cors())
app.use(express.json()) //Parse JSON from HTTP request body
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);



