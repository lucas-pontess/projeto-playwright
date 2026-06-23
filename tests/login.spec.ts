import {test, expect} from '../fixtures';

test('login com sucesso', async ({page, loginPage}) => { 
    await loginPage.fazerLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(page.locator('.flash.success')).toBeVisible();
});

test('login com credenciais invalidas', async ({page, loginPage}) => {
    await loginPage.fazerLogin('usuarioerrado', 'senhaerrada');
    await expect(page.locator('.flash.error')).toBeVisible();
});

const credenciaisInvalidas = [
    { usuario: 'errado', senha: 'SuperSecretPassword!'},
    { usuario: 'tomsmith', senha: 'senhaerrada'},
    { usuario: '', senha: ''},
];
 for (const { usuario, senha } of credenciaisInvalidas) {
    test(`login invalido com usuario "${usuario}"`, async ({ page, loginPage }) => {
      await loginPage.fazerLogin(usuario, senha);
      await expect(page.locator('.flash.error')).toBeVisible();
    });
  }


