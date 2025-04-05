import { test } from '@playwright/test';

test.describe('Test Group', () => {
        test.beforeEach(async ({ page }) => {await page.goto('http://practice.cydeo.com/');
    });
  

  test('Regular Alert', async ({ page }) => {

    page.on('dialog', async (alert) => {  
    await page.waitForTimeout(3000);
    alert.accept();

    });

    let clickFOrJSAlert = page.locator("//a[@href='/javascript_alerts']");
    await clickFOrJSAlert.click();
    await page.waitForTimeout(3000);
});

  test('Confirmation Alert', async ({ page }) => {

    page.on('dialog', async (alert) => {  
    await page.waitForTimeout(3000);
    await alert.accept();

    });

    let clickFOrJSAlert = page.locator("//a[@href='/javascript_alerts']");
    await clickFOrJSAlert.click();
    await page.waitForTimeout(3000);

    let clickFOrJSConfirmButton = page.locator("//[contains(test(),'JS Confirm')]");    
    await clickFOrJSAlert.click();
    await page.waitForTimeout(3000);
    
    
    
  });

  test('Prompt Alert', async ({ page }) => {

    page.on('dialog', async (alert) => {  
    await page.waitForTimeout(3000);
    await alert.accept();

    });
    


  });
});