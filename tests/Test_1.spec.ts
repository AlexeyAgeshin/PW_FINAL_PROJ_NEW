import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Test 1: Verify login with valid credentials', async ({ page }) => {
await page.goto('/auth/login');

await page.getByPlaceholder('Your email').fill(process.env.USER_EMAIL as string);
await page.getByPlaceholder('Your password').fill(process.env.USER_PASSWORD as string);


await page.getByTestId('login-submit').click();


await expect(page).toHaveURL('/account');


await expect(page.getByTestId('page-title')).toBeVisible();
await expect(page.getByTestId('page-title')).toHaveText('My account');

await expect(page.getByTestId('nav-menu')).toBeVisible();
await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
});