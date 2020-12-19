const { request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async (request, response)=>{

   const saltPassword = await bcrypt

  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password

  })
  signedUpUser.save()
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    response.json(error)
  })
})

router.get('/signin')
module.exports = router 