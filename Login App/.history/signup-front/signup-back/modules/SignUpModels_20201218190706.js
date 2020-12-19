const mongoose = require('mongoose')

const signUpTemplate = new mongoosee.Schema({
  fullName:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true
  },
  password:{
    type: String,
    required: true
  }
})