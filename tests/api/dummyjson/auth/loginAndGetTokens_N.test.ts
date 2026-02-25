import { login } from '../endpoint/auth';

describe('Dummy Json - Auth - Negative Cases', () => {
  it('ATH-TC-N001_Failed login with invalid credentials', async () => {
    const requestBody = {
      username: 'agus',
      password: 'susanto',
    };
    const response = await login(requestBody);
    console.log(response.body);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Invalid credentials');
  });
});
