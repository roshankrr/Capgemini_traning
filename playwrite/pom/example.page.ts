import { Locator, Page } from "@playwright/test";

export default class Example {
  unameTF: Locator;
  passwordTF: Locator;
  submitBtn: Locator;

  constructor(page: Page) {
    this.unameTF = page.locator("input[name='username']");
    this.passwordTF = page.locator("input[name='password']");
    this.submitBtn = page.locator("#submit");
  }

  async Login(username: string, pass: string) {
    await this.unameTF.fill(username);
    await this.passwordTF.fill(pass);
    await this.submitBtn.click();
  }
}
