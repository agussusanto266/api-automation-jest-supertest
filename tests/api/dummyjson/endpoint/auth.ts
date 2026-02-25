import request from 'supertest';

const baseUrl = (global as any).BASE_URL as string;
export async function login(requestBody: any) {
  return request(baseUrl)
    .post('/auth/login')
    .send(requestBody)
    .set('Content-Type', 'application/json');
}
