const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send('It works!')
})

let port = process.env.PORT || 8080
app.listen(port)
console.log("You're on localhost " + port)

module.exports = app
