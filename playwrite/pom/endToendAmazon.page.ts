import { Locator, Page } from "@playwright/test";

export default class endToEnd_amazon {
  searchbarTF: Locator;
  ramCheckBox: Locator;
  forthprod: Locator;
  quantityDD: Locator;
  addtoCartBTN: Locator;

  constructor(page: Page) {
    this.searchbarTF = page.locator("input#twotabsearchtextbox");
    this.ramCheckBox = page.locator(
      '//div[@id="p_n_g-1003495121111/44897277031"]//span[text()="10 GB & Above"]',
    );
    this.forthprod = page.locator(
      '//div[@data-cel-widget="search_result_4"]//img',
    );
    this.quantityDD = page.locator('//select[@name="quantity"]');
    this.addtoCartBTN = page.locator('//input[@id="add-to-cart-button"]');
  }

  async selectQuantity(value: string = "3", page2: Page) {
    this.quantityDD = page2.locator('//select[@name="quantity"]');
    await this.quantityDD.selectOption({ value });
  }

  async buyNow(page2: Page) {
    this.addtoCartBTN = page2
      .locator('//input[@title="Add to Shopping Cart"]')
      .last();
    await this.addtoCartBTN.click();
  }
}
