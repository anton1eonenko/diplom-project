import { BasePage } from "../frameork/base/BasePage";

class ItemPage extends BasePage {
    PriceСhart () {
        return this.page.locator("//*[contains(text(),'График')]")
    }
    AddToCart () {
        return this.page.locator("//div[contains(@class, 'product-aside__offers-item product-aside__offers-item_primary')]//a[text()='В корзину']");
    }
    GoToCart () {
        return this.page.locator("//*[contains(text(),'Перейти в корзину')]")
    }


} 
export {ItemPage}