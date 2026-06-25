import {test, expect} from '../fixtures';

test.describe('Login com sucesso', () => {
    test('login com sucesso', async ({ page, loginPage, securePage }) => {
        await test.step('Fazer login', async () => {
            await loginPage.fazerLogin(process.env.USERNAME!, process.env.PASSWORD!);
        });

        await test.step('Verificar página segura', async () => {
            await securePage.verificarPaginaCarregada();
        });

        await test.step('Fazer logout e verificar redirecionamento', async () => {
            await securePage.fazerLogout();
            await expect(page).toHaveURL('/login');
        });
    });
});



test.describe('Login com credenciais inválidas', () => {
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
});