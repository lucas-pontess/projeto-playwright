import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
   loginPage = new LoginPage(page);
   await page.goto('https://the-internet.herokuapp.com/login');
  });

test('login com sucesso', async ({page}) => { 
    await loginPage.fazerLogin('tomsmith', 'SuperSecretPassword!');
    await expect(page.locator('.flash.success')).toBeVisible();
});

test('login com credenciais invalidas', async ({page}) => {
    await loginPage.fazerLogin('usuarioerrado', 'senhaerrada');
    await expect(page.locator('.flash.error')).toBeVisible();
});





