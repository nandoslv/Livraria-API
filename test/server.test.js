import request from 'supertest'
import app from '../app.js';

describe("Testando acesso a API", () => {

  test('Servidor rodando na porta 3000', async () => {
    const resposta = await request(app).get('/');
    expect(resposta.status).toBe(200);
  });
});


