import { login } from '../../dummyjson/endpoint/auth';

describe('Dummy Json - Auth - Positive Cases', () => {
  it('ATH-TC-P001_Success login and get tokens', async () => {
    const requestBody = {
      username: 'emilys',
      password: 'emilyspass',
    };
    const response = await login(requestBody);
    expect(response.status).toBe(200);
    expect(response.body.username).toBe('emilys');
    expect(response.body.firstName).toBe('Emily');
    expect(response.body).toHaveProperty('accessToken');
    expect(response.body).toHaveProperty('refreshToken');
  });
});
