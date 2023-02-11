import { test, expect } from "@playwright/test";
import { BasePage } from "../frameork/base/BasePage";
import { MainPage } from "../PO/MainPage";
import { HeadphonesPage } from "../PO/HeadphonesPage";
import { ResultPage } from "../PO/ResultPage";
import { ItemPage } from "../PO/ItemPage";
// npx playwright test --headed

test.describe("Test Onliner", async () => {
  test('Open Onliner and OpenHeadphonesPage', async ({page}) => {
      await new BasePage(page).Open();
      await new MainPage(page).Headphones().click();
      await expect(page).toHaveURL('https://catalog.onliner.by/headphones?utm_source=catalog_tile&utm_medium=headphones')
  });
  test("Prime, Clover and SuperPrice", async ({ page }) => {
    await new HeadphonesPage(page).OpenHeadphonesPage();
    await new HeadphonesPage(page).Prime().click();
    await new HeadphonesPage(page).Clover().click();
    await new HeadphonesPage(page).SuperPrice().click();

    const testValue = new ResultPage(page).Prime_Cloverand_SuperPrice_Test();
    await expect(testValue).toBeVisible();
  });

  test ("SuperPrice Apple", async ({page}) => {
    await new HeadphonesPage(page).OpenHeadphonesPage(); 
    await new HeadphonesPage(page).SuperPrice().click(); 
    await new HeadphonesPage(page).getMaker('Apple').click(); 
    
    const testValue = new ResultPage(page).Apple_Test();
    await expect(testValue.getByTitle('Производитель') && testValue.getByTitle('Суперцена')).toHaveText('Apple' && 'Суперцена')

  });
  test ("Xiaomi in Xiaomi Wireless", async ({page}) => {
    await new HeadphonesPage(page).OpenHeadphonesPage(); 
    await new HeadphonesPage(page).getMaker('Xiaomi').click();
    await new HeadphonesPage(page).getShop('XIAOMI').click();
    await new HeadphonesPage(page).getPickUpInOneClick('Wireless').click(); 

    const testValue = new ResultPage(page).Xiaomi_in_XiaomiSHOP_Wireless_Test(); 
    await expect(testValue).toContainText('Найдено');
  });
  test ("Add to Comparison", async ({page}) => {
    await new HeadphonesPage(page).OpenHeadphonesPage(); 

    await new HeadphonesPage(page).getMaker('JBL').click();
    await new HeadphonesPage(page).getComparisonItems('1').click();
    await new HeadphonesPage(page).getMaker('JBL').click();

    await new HeadphonesPage(page).getMaker('Apple').click()
    await new HeadphonesPage(page).getComparisonItems('1').click();
    await new HeadphonesPage(page).getMaker('Apple').click();

    await new HeadphonesPage(page).getMaker('Xiaomi').click()
    await new HeadphonesPage(page).getComparisonItems('1').click();
    await new HeadphonesPage(page).getMaker('Xiaomi').click()

    const testValue = new ResultPage(page).Add_to_Comparison_Test(); 
    await expect(testValue).toContainText('3 товара в сравнении');
  })
  test ("Comparison", async ({page}) => {
    await new HeadphonesPage(page).OpenHeadphonesPage(); 

    await new HeadphonesPage(page).getMaker('Sony').click(); 
    await new HeadphonesPage(page).getComparisonItems('2').click();
    await new HeadphonesPage(page).getMaker('Sony').click(); 

    await new HeadphonesPage(page).getMaker('Logitech').click(); 
    await new HeadphonesPage(page).getComparisonItems('5').click();
    await new HeadphonesPage(page).getMaker('Logitech').click(); 

    await new HeadphonesPage(page).ComparisonButton().click(); 

    const testValue = new ResultPage(page).Comparison_Test(); 
    await expect(testValue).toBeVisible()
  });
  test ("Price chart,", async ({page}) => {
    await new HeadphonesPage(page).OpenHeadphonesPage(); 
    await new HeadphonesPage(page).getGoToItem('2').click(); 
    await new ItemPage(page).PriceСhart().click(); 
    const testValue = new ResultPage(page).PriceChart_Test(); 
    await expect(testValue).toBeVisible(); 

  })
  test ("Buy Micro superprice in XIAOMI Shop", async ({page}) => {
    await new HeadphonesPage(page).OpenHeadphonesPage(); 

    await new HeadphonesPage(page).SuperPrice().click(); 
    await new HeadphonesPage(page).getPickUpInOneClick('WithMicrophone').click(); 
    await new HeadphonesPage(page).getShop('XIAOMI').click(); 
    await new HeadphonesPage(page).getGoToItem('1').click(); 
    await new ItemPage(page).AddToCart().click(); 
    await new ItemPage(page).GoToCart().click(); 

    await expect(page).toHaveURL("https://cart.onliner.by/");
  });
});






