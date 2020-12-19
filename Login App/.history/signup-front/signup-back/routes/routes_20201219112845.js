const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async (request, response)=>{

   const saltPassword = await bcrypt.genSalt(10)
   const securePassword = await bcrypt.hash(request.body.password, saltPassword)

  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: securePassword

  })
  signedUpUser.save()
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    response.json(error)
  })
})

// # serving the flash policy file
net = require("net")

net.createServer((socket) =>
  //just added
  socket.on("error", (err) =>
    console.log("Caught flash policy server socket error: ")
    console.log(err.stack)
  )

  socket.write("<?xml version=\"1.0\"?>\n")
  socket.write("<!DOCTYPE cross-domain-policy SYSTEM \"http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd\">\n")
  socket.write("<cross-domain-policy>\n")
  socket.write("<allow-access-from domain=\"*\" to-ports=\"*\"/>\n")
  socket.write("</cross-domain-policy>\n")
  socket.end()
).listen(843)
router.get('/signin')
module.exports = router 

