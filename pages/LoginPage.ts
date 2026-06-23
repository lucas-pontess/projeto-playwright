import { Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async fazerLogin(usuario: string, senha: string){
        await this.page.fill("#username", usuario);
        await this.page.fill("#password", senha);
        await this.page.click("button[type='submit']");
        }
    }