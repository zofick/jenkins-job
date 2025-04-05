import { test } from '@playwright/test';

test.describe('Test Group', () => {

    //create beforeEach to navigate to http://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto('http://practice.cydeo.com/');
    });
    
  test('Check', async ({ page }) => {
    // OR let checkBoxLink = page.getByText("Checkbox").click;
    let checkBoxLink = page.locator('text=Checkbox').click();
    let checkBox1 = page.locator("//input[@id='box1']");
    checkBox1.check();
    await page.waitForTimeout(1000);
  });

  test('Uncheck', async ({ page }) => {
        let checkBoxLink = page.getByText("Checkboxes");
        await checkBoxLink.click();

        let checkBox2 = page.locator("#box2");
        await checkBox2.uncheckcheck();
        await page.waitForTimeout(1000);
  });

  test('SelectOption', async ({ page }) => {
    let deopDownLink = page.locator("//a[@href='/dropdown']").click();
    let simpleDrobdown = page.locator("//select[@id='dropdown']");
    await simpleDrobdown.selectOption("Option 1");
    await page.waitForTimeout(1000);

  });
});