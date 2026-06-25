import { test, expect } from '@playwright/test';

test.describe('API - JSONPlaceholder', () => {

    test('GET /posts/1 retorna status 200', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.status()).toBe(200);
    });

    test('GET /posts/1 retorna o post correto', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        const body = await response.json();
        expect(body.id).toBe(1);
        expect(body.userId).toBe(1);
    });

});