let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('Premium', function(){
  it('should not error', function(){
    chai.request(server)
    .get('/premium')
    .end(function(err, res){
      res.should.have.status(200)
    })
  })

  it('should post and display user selection', function(done){
    chai.request(server)
    .post('/premium')
    .send({
      premium: '45.99'
    })
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('You selected premium: £45.99')
      done()
    })
  })
})
