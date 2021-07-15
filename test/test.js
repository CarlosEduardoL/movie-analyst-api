process.env.NODE_ENV = "test";

const mock_db = require("./mock-db");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app").app(mock_db.mock);
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
//Our parent block
describe("API", () => {
    /*
     * Test the /GET route
     */
    describe("/GET home", () => {
        it("it should GET any reply", (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe("/GET movies", () => {
        it("it should return the mock movies", (done) => {
            chai.request(server)
                .get("/movies")
                .end((err, res) => {
                    res.body.should.be.eql(mock_db.expected.movies)
                    done();
                });
        });
    });
    describe("/GET reviewers", () => {
        it("it should return the mock movies", (done) => {
            chai.request(server)
                .get("/reviewers")
                .end((err, res) => {
                    res.body.should.be.eql(mock_db.expected.reviewers)
                    done();
                });
        });
    });
    describe("/GET publications", () => {
        it("it should return the mock movies", (done) => {
            chai.request(server)
                .get("/publications")
                .end((err, res) => {
                    res.body.should.be.eql(mock_db.expected.publications)
                    done();
                });
        });
    });
});
