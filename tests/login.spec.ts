import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });

test('login com sucesso', async ({page}) => { 
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
});

test('login com credenciais invalidas', async ({page}) => {
    await page.fill('#username', 'usuarioerrado' );
    await page.fill('#password', 'senhaerrada');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
});





