"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const TIMEOUT = 10000,
    AN_USER = '/7',
    USER_PATH = '/usuarios',
    URL = process.env.NODE_ENV,
    { USER } = require("../json_files/users_body.js"),
    { USER_SCHEMA, GET_SCHEMA } = require("../schemas/contract.js")

describe("Realizar testes de contrato para a API de Usuários", function () {

    it("Verifica se o objeto resposta obedece ao contrato estabelecido após realizar uma requisição GET",
        function (done) {
            this.timeout(TIMEOUT);
            request(URL)
                .get(USER_PATH)
                .expect("Content-Type", /json/)
                .end(function (err, res) {

                    expect(res.status).to.be.equal(200)
                    joiAssert(res.body, GET_SCHEMA);
                    done(err);
                });
        });

    it("Verifica se o objeto resposta obedece ao contrato estabelecido após ralizar uma requisição POST",
        function (done) {
            this.timeout(TIMEOUT);
            request(URL)
                .post(USER_PATH)
                .send(USER)
                .expect("Content-Type", /json/)
                .end(function (err, res) {

                    joiAssert(res.body, USER_SCHEMA);
                    expect(res.status).to.be.eql(201);
                    done(err);
                });
        });

    it("Verifica o status code de retorno após deletar um usuário existente",
        function (done) {
            this.timeout(TIMEOUT);
            request(URL)
                .delete(USER_PATH + AN_USER)
                .expect("Content-Type", /json/)
                .end(function (err, res) {

                    expect(res.status).to.be.eql(200);
                    done(err);
                });
        });

    it("Verifica o status code de retorno após deletar um usuário inexistente",
        function () {
            this.timeout(TIMEOUT);
            request(URL)
                .delete(USER_PATH + AN_USER)
                .expect("Content-Type", /json/)
                .end(function (err, res) {

                    expect(res.status).to.be.eql(404);
                    done(err);
                });

        });
});