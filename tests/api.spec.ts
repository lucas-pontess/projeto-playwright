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

test.describe('API com Mock', () => {

    test('GET /posts/1 com resposta mockada', async ({ page }) => {
        await page.route('**/posts/1', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ id: 1, title: 'Post falso', userId: 99 }),
            });
        });

        await page.goto('about:blank');
        const body = await page.evaluate(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            return response.json();
        });

        expect(body.title).toBe('Post falso');
        expect(body.userId).toBe(99);
    });

});
