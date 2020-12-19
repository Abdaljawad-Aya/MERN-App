const mongoose = require('mongoose')

const signUpTemplate = new mongoosee.Schema({
  fullName:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  }
})