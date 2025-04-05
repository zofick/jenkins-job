import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://practice.cydeo.com/');
    });

    test('Verify that there are exactly 50 link elements within the <ul> tag', async ({ page }) => {
        let elements = await page.locator("//ul[@class='list-group']/li/a").all();
        
        expect(elements.length).toBe(50); // Verify that there are exactly 50 link elements.
        expect(elements.length).toBeGreaterThan(20); // Additional check

        // Additional assertions
        for (const element of elements) {
          await expect(element).toBeVisible();
          await expect(element).toHaveAttribute('href');
        }
    });

    test('Verify that each of the 50 link elements within the <ul> tag is visible & clickable', async ({ page }) => {
        let elements = await page.locator("//ul[@class='list-group']/li/a").all();

        for (const element of elements) {
          await expect(element).toBeVisible();
          await expect(element).toBeEnabled(); // Check if the element is clickable
        }
    });

    test('Verify that each of the 50 link elements within <ul> tag has a href attribute', async ({ page }) => {
        let elements = await page.locator("//ul[@class='list-group']/li/a").all();

        for (const element of elements) {
          await expect(element).toHaveAttribute('href');
        }
    });
});