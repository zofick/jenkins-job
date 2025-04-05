import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  
  test.describe('Test Group', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://practice.cydeo.com/');
    });
  
    test('Verify checkboxes are checked', async ({ page }) => {
      await page.getByText('Checkboxes').click();
      let firstCheckbox1 = page.locator('input#box1');
      let firstCheckbox2 = page.locator('input#box2');
  
      await firstCheckbox1.check();
      await firstCheckbox2.check();
  
      await expect(firstCheckbox1).toBeChecked();
      await expect(firstCheckbox2).toBeChecked();

      expect (await firstCheckbox1.isChecked()).toBeTruthy();
      expect (await firstCheckbox2.isChecked()).toBeTruthy();
      await firstCheckbox1.uncheck();
      expect (await firstCheckbox1.isChecked()).toBeFalsy();
      await firstCheckbox2.uncheck();
      expect (await firstCheckbox2.isChecked()).toBeFalsy();

      
    });
  
    test('Verify checkboxes are unchecked', async ({ page }) => {
      
      let headerElement = page.locator("span.h1y");
      
      await expect(headerElement).toHaveText("Test Automation Practice");

    });
  
    test('Verify text of the element', async ({ page }) => {
      // Add your test code here
    });
  });

  test('Verify checkboxes are unchecked', async ({ page }) => {
    
  });

  test('Verify text of the element', async ({ page }) => {
    
  });
});