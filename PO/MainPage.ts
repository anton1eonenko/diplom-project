import { Page } from "@playwright/test";
import { BasePage } from "../frameork/base/BasePage";

class MainPage extends BasePage {
  public Headphones() {
    return this.page.locator("//*[text()='Наушники']");
  }
}

export { MainPage };
