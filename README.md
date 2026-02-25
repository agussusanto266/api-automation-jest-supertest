# API Automation with Jest + Supertest

## 📌 Overview
Project ini digunakan untuk melakukan **API automation testing** menggunakan [Jest](https://jestjs.io/) sebagai test runner dan assertion library, serta Supertest [(github.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fgithub.com%2Fvisionmedia%2Fsupertest") untuk HTTP request ke endpoint API.  
Tujuannya adalah memastikan API berjalan sesuai kontrak (status code, response body, headers, dll).

---

## 🚀 Tech Stack
- **Node.js** (>= 16)
- **Jest** – test runner & assertion
- **Supertest** – HTTP client untuk testing
- **TypeScript** (opsional, jika project pakai TS)
- **DummyJSON API** (contoh endpoint untuk auth & data dummy)

---

## 📂 Project Structure
```plaintext
api-automation-jest-supertest/
├── src/
│   └── endpoint/
│       └── auth.ts        # fungsi login, dll
├── tests/
│   └── auth.test.ts       # test case untuk auth
├── .gitignore
├── jest.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup
1. Clone repo:
   ```bash
   git clone https://github.com/your-org/api-automation-jest-supertest.git
   cd api-automation-jest-supertest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Buat file `.env` untuk konfigurasi:
   ```env
   BASE_URL=https://dummyjson.com
   ```

---

## 🧪 Running Tests
Jalankan semua test:
```bash
npm test
```

Jalankan test spesifik berdasarkan nama:
```bash
jest -t "ATH-TC-P001_Success login and get tokens"
```

Jalankan test berdasarkan file:
```bash
jest tests/auth.test.ts
```

---

## 📊 Coverage
Untuk melihat coverage report:
```bash
npm test -- --coverage
```
Report akan muncul di folder `coverage/`.

---

## 📝 Example Test Case
```ts
import { login } from '../src/endpoint/auth';

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
```

---

## 📌 Git Ignore
Pastikan `.gitignore` sudah mencakup file/folder berikut:
```gitignore
node_modules/
coverage/
dist/
build/
.env
jest-cache/
jest-results.json
```

---

## ✅ Best Practices
- Gunakan **naming convention** untuk test case (`ATH-TC-P001`, dll).
- Pisahkan **positive** dan **negative cases**.
- Simpan **base URL** dan credential di `.env`, jangan hardcode.
- Gunakan **assertion yang relevan** sesuai kontrak API (status, body, headers).
