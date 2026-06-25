import { Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async fazerLogin(usuario: string, senha: string){
        await this.page.getByLabel("Username").fill(usuario);
        await this.page.getByLabel("Password").fill(senha);
        await this.page.getByRole("button",{name: "Login"}).click();
        }
    }