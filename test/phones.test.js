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
    .post('/phones')
    .send(phoneSelection)
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('iPhoneX')
    })
  })
})
