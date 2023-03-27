/* eslint-disable consistent-return */
const axios = require('axios');
const http = require('http');

const app = require('../server');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(4000, (err) => {
    if (err) return done(err);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});
jest.setTimeout(10000);

describe('GET /', () => {
  it('should return status code 200 ', async () => {
    const response = await axios.get('http://localhost:4000');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(parseInt(response.headers['content-length'])).toBeGreaterThan(0);
  });
});

describe('GET /clubs/noID', () => {
  it('request with no ID should fail with return status code 404 and error message', (done) => {
    http.get('http://localhost:4000/clubs/edit', (res) => {
      expect(res.statusCode).toBe(404);
      expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        expect(responseData).toBe('{"error":"Club not found"}');
        done();
      });
    });
  });
});
