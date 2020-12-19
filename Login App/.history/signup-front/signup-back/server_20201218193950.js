const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.PORT)


app.listen(4000, () => console.log('server is up and running'))