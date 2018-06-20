const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let data = require('./data.js')
app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index')
})

app.post('/phone', function(req, res){
  res.render('phones', { phone: req.body, data: data } )
})

app.get('/premium', function(req, res){
  res.render('premium')
})

let port = process.env.PORT || 8080
app.listen(port)
console.log("You're on localhost " + port)

module.exports = app
