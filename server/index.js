// Imports
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const userRouter = require('./routes/user.route');
const bodyParser = require('body-parser');

// Variable Declarations
const port = process.env.port
const mongodb_uri = process.env.URI

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user", userRouter)

// Mongo DB Connection
mongoose.connect(mongodb_uri)
.then(()=>{
    console.log("Mongo DB is hot and ready");
})
.catch((err)=>{
    console.log(`Failed to connect and ${err}`);
})




app.listen(port,()=>{
    console.log(`Server is started`);
})