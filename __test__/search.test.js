const expect = require('chai').expect;
const request = require('request');


describe('testing the search endpoint', () =>{
    it ('result', (done) =>{
        request('http://localhost:3030/searchTest',(error, response, body)=>{

        this.timeout =10000;
        expect(response).not.to.be.undefined;
        done();
        })
    })
})