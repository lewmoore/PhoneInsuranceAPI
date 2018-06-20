let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('Index', function(){
  it('should render welcome text', function(){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('Welcome to Brolly')
    })
  })

  it('should show a list of devices', function(){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200)
      res.text.should.contain('iPhone X 64GB')
      res.text.should.contain('Google Pixel 2 64GB')
      res.text.should.contain('Samsung Galaxy S9')
    })
  })
})
