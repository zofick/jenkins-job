import { test } from '@playwright/test';

test.describe('Test Group', () => {

    //create before each to navigate to http://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto('http://practice.cydeo.com/');
    });
    
  test('innerText(): retrives the visible text', async ({ page }) => {

    let headerElenebt = page.locator("//span[@class='h1y']");
    let actualText = await headerElenebt.innerText(); // Returns the visible text of the element.

    console.log(actualText);
    // Assert the expected value
    
  });

  test('inputvalue(): only works with <input>, <textarea>,<select> retrives the input value', async ({ page }) => {

    let inputField = page.locator("//a[@href='/inputs']");
    await inputField.click();
    let inputValue = await inputField.inputValue(); // Returns the current value of the input element.
    console.log(inputValue);
    // Assert the expected value
    
  });

  test('getAttribute():', async ({ page }) => {
    let abTestingLink = page.locator("text='A/B Testing'");
    let hrefLink = await abTestingLink.getAttribute("href"); // Returns the current value of the input element.
  console.log(hrefLink);
    
  });
});