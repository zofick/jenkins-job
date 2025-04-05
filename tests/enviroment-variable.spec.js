import { test } from '@playwright/test';

test('@env-test Testing environment variable', async ({ page }) => {
    
    console.log(process.env.PRACTICE_USERNAME)
    console.log(process.env.PRACTICE_PASSWORD)
    
});

test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
    
    
    
    
});

