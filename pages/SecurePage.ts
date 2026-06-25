import {Page, expect} from '@playwright/test';

export class SecurePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async verificarPaginaCarregada() {
        await expect(this.page).toHaveURL('/secure');
        await expect(this.page.locator('.flash.success')).toContainText('You logged into a secure area!');
    }
    async fazerLogout() {
        await this.page.getByRole('link', {name: 'Logout'}).click();
    }
}