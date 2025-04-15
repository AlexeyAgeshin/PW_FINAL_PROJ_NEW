import { test, expect } from '@playwright/test';

test('Test 1: Verify login with valid credentials', async ({ page }) => {
await page.goto('https://practicesoftwaretesting.com/auth/login');

await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
await page.getByPlaceholder('Your password').fill('welcome01');


await page.locator('[data-test="login-submit"]').click();


await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');


await expect(page.locator('[data-test="page-title"]')).toBeVisible();
await expect(page.locator('[data-test="page-title"]')).toHaveText('My account');

await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
});