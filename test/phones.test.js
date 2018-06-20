let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('Phones', function(){
  let phoneSelection = {
    phone: 'iPhoneX'
  }

  it('should post with user selection', function(){
    chai.request(server)
    .post('/phone')
    .send(phoneSelection)
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('iPhoneX')
    })
  })

  it('shows phone premium when iPhoneX is selected', function(){
    chai.request(server)
    .post('/phone')
    .send(phoneSelection)
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('Premium: £50.42')
    })
  })

  it('shows phone premium when Google Pixel is selected', function(){
    chai.request(server)
    .post('/phone')
    .send({
      phone: 'GooglePixel'
    })
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('Premium: £40')
    })
  })
})
