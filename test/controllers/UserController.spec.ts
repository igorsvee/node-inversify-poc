// import 'mocha';
import supertest from "supertest";
import 'reflect-metadata';

import chai from 'chai';

import {user1, user2} from "../../src/dataaccess/DummyUserDaoImpl";
import server from "../../src/server";

const expect = chai.expect;

describe('UserController test', function () {

    it("GET /users endpoint works", (done) => {

        supertest(server).get("/users")
            .expect(200)
            .then(res => {
                expect(res.body).to.eql({data: [user1, user2]});
                done();
            });

    });

    it("GET /users/:id endpoint works", (done) => {

        supertest(server).get("/users/123")
            .expect(200)
            .then(res => {
                expect(res.body).to.eql({data: user1});
                done();
            });

    });

    it("POST /users endpoint works", (done) => {
        const anyObject = {};

        supertest(server).post("/users")
            .send(anyObject)
            .expect(201)
            .then(res => {
                expect(res.body).to.be.empty;
                done();
            });

    });

});