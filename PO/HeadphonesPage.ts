import { Page } from "@playwright/test";
import { BasePage } from "../frameork/base/BasePage";
import { Maker } from "../frameork/base/enums/Maker";
import { ComparisonItems } from "../frameork/base/enums/ComparisonItems";
import { Shops } from "../frameork/base/enums/Shops";
import { PickUpInOneClick } from "../frameork/base/enums/PickUpInOneClick";
import { GoToItem } from "../frameork/base/enums/goToItem";

class HeadphonesPage extends BasePage {
  async OpenHeadphonesPage() {
    return this.page.goto(
      "https://catalog.onliner.by/headphones?utm_source=catalog_tile&utm_medium=headphones"
    );
  }

  public Prime() {
    return this.page.locator(
      "//label[@class='schema-filter__bonus-item schema-filter__bonus-item_primary']//div[@class='i-checkbox__faux']"
    );
  }
  public Clover() {
    return this.page.locator(
      "//label[@class='schema-filter__bonus-item schema-filter__bonus-item_secondary']//div[@class='i-checkbox__faux']"
    );
  }
  public SuperPrice() {
    return this.page.locator(
      "//label[@class='schema-filter__bonus-item schema-filter__bonus-item_additional']//div[@class='i-checkbox__faux']"
    );
  }

  public getMaker (name: string) {
    return this.page.locator(Maker[name])
  }

  public getComparisonItems (number: string) {
    return this.page.locator(ComparisonItems[number])
  }

  public getShop (name: string) {
    return this.page.locator(Shops[name])
  }

  public getPickUpInOneClick (name: string) {
    return this.page.locator(PickUpInOneClick[name])
  }

  public getGoToItem (number: string) {
    return this.page.locator(GoToItem[number])
  }
  
  public ComparisonButton () {
    return this.page.locator("//*[contains(@class, 'catalog-content js-scrolling-area')]//a[contains(@class, 'compare-button__sub compare-button__sub_main')]")
  }
}

export { HeadphonesPage };
