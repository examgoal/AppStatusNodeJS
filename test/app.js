process.env.NODE_ENV = 'test';

let chai = require('chai');

let chaiHttp = require('chai-http');

let server = require('../server');

let should = chai.should();

chai.use(chaiHttp);

describe("V1 Routes", ()=>{

    describe("APPS", ()=>{

        ['jee-main-q', 'gate-q'].forEach(el=>{
            describe(el, ()=>{

                it("SYSTEM EVENTS", (done)=>{
                    chai.request(server)
                        .get("/apps/android/"+el+"/system-events")
                        .end((err, res)=>{
                            res.should.have.status(200);
                            res.body.should.be.a("object");
                            res.body.should.have.property("events");
                            done();
                        });
                });

                it("Check System", (done)=>{
                    chai.request(server)
                        .get("/apps/android/"+el+"/check-system")
                        .end((err, res)=>{
                            res.should.have.status(200);
                            res.body.should.be.a("object");
                            res.body.should.have.property("maintain");
                            done();
                        });
                });

            })
        });


    });

});

describe("Legacy Routes", ()=> {
    ['jeemainQ', 'gateapp'].forEach(el => {
        describe(el, () => {

            it("SYSTEM EVENTS", (done) => {
                chai.request(server)
                    .get("/" + el + "/sysevents.json")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        res.body.should.have.property("events");
                        done();
                    });
            });

            it("Check System", (done) => {
                chai.request(server)
                    .get("/" + el + "/checksys.json")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        res.body.should.have.property("maintain");
                        done();
                    });
            });
        })
    });

});

it("Health Check Route", (done)=>{
    chai.request(server)
        .get("/healthCheck")
        .end((err, res)=>{
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
        })
});

it("404 Handler", (done)=>{
    chai.request(server)
        .get("/pagenotfound")
        .end((err, res)=>{
            res.should.have.status(404);
            res.body.should.be.a("object");
            done();
        })
});