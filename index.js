require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const companyRoute = require('./routes/companyRoute')
const cors = require('cors')

//Express app
const app = express();

//Install cors
app.use(cors())

//Use json inside expresss
app.use(express.json())

//Routes
app.use('/', companyRoute)

//Connect to mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(8800, ()=>{
        console.log("Connected!")
    })
})
.catch((error)=>{console.log(error)})



