// Imports
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');


// Variable Declarations
const port = process.env.port

// Middlewares
app.use(cors());






app.listen(port,()=>{
    console.log(`Server is started`);
})