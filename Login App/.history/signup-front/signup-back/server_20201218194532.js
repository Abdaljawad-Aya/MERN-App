const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routersUrls = require('./routes/routes') 


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=> console.log('Database connected'))




app.use('/app')
app.listen(4000, () => console.log('server is up and running'))