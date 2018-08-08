const tape = require("tape");
const supertest = require("supertest");
const router = require('../src/router');

tape('test of / home page routes', (t) => {
    supertest(router)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html')
        .end((err, res) => {
            if(err) t.error(err);
            t.equal(typeof res.body, 'object', ' \'home page\' Should return object');
            t.end();
        });
});
