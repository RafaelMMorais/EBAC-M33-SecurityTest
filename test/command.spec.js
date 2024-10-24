const req = require('supertest');
const { resolve } = require('path')
const API_URL = process.env.API_URL

describe('User Login', () => {
    it('Command Injection', async () => {
        await req(API_URL)
            .post('/imagem/upload')
            .attach('file', resolve("./resources/ & echo 'Meu Comando' & ls -la &"))
            .end((error, response) => {
                expect(response.statusCode).toEqual(500)
            })
    });
});