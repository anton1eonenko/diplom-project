import { Page } from '@playwright/test';
class BasePage {
    readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async Open() {
     return this.page.goto('https://catalog.onliner.by/');
  }
  async Close () {
    return this.page.close()
  }
} 

export {BasePage}