let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('Index', function(){
  it('should not error', function(){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200)
    })
  })
})
