const chai= require('chai')
const chaiHttp = require('chai-http')
const expect= chai.expect
const baseurl = 'localhost:3000'
chai.use(chaiHttp)

describe('Unit Test', function(){

    it('getbuildings', function(done){
        chai.request(baseurl)
        .get('/buildings')
        .set("authorization", "Basic") //replace Basic with JWT
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            done();
        }); 
    })
    
    it('getelevators', function(done){
        chai.request(baseurl)
        .get('/elevators')
        .set("authorization", "Basic") //replace Basic with JWT
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            done();
        }); 
    })

    it('getelevatorsbycolumn', function(done){
        chai.request(baseurl)
        .get(`/columns/5/elevators`)
        .set("authorization", "Basic") //replace Basic with JWT
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            done();
        }); 
    })

    it('postintervention', function(done) {
        let int = {
            employee_id: 1,
            elevator_id: 1,
            column_id: 1,
            battery_id: 1,
            building_id: 1,
            customer_id: 1, 
            result: 'test',
            status: 'test'
        }
        chai.request(baseurl)
        .post('/interventions/new')
        .send(int)
        .set("authorization", "Basic") //replace Basic with JWT
        .end(function (err, res) {
            expect(res).to.have.status(200);
            // expect(res.body).to.be.an("array");
            done();
        }); 
    })











}) // END 