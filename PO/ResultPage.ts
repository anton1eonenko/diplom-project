import { Page } from "@playwright/test";
import { BasePage } from "../frameork/base/BasePage";

class ResultPage extends BasePage {
  public Prime_Cloverand_SuperPrice_Test() {
    return this.page.locator("//div[@id='schema-products']");
  }
  public Apple_Test () {
    return this.page.locator("//div[@id='schema-tags']");
  }
  public Xiaomi_in_XiaomiSHOP_Wireless_Test () {
    return this.page.locator("//span[@class='schema-filter-button__sub schema-filter-button__sub_main']");
  }
  public Add_to_Comparison_Test () {
    return this.page.locator("//*[contains(@class, 'compare-button__sub compare-button__sub_main')]"); 
  }
  public Comparison_Test() {
    return this.page.locator("//*[contains(@class, 'product-table__row product-table__row_header product-table__row_top')]")
  }
  public PriceChart_Test () {
    return this.page.locator("//div[contains(@class, 'offers-form__title offers-form__title_middle-alter')]")
  }


}

export { ResultPage };
