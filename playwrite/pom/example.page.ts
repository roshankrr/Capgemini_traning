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
}
