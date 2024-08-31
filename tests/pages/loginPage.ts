import {expect, type Page, type Locator} from '@playwright/test';
import messages from '../utils/messages';


export class LoginPage  {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly MessageError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.submitButton = page.locator('text=LOGIN');
        this.MessageError = page.locator('[data-test="error"]');
    }

    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async checkInvalidCredentials(invalidCredentials: string) {
        await expect(this.MessageError).toHaveText(messages.login[invalidCredentials]);
    }

}