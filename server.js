const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index')
})

app.post('/phones', function(req, res){
  res.render('phones', { phone: req.body } )
})

let port = process.env.PORT || 8080
app.listen(port)
console.log("You're on localhost " + port)

module.exports = app
