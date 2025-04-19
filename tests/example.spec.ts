import { test, expect } from '@playwright/test';

test('should navigate to the sign-in page and display the Clerk sign-in window', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')

  // Find and click the button with the text 'Log in to account'
  const loginButton = page.locator('button:has-text("Log in to account")');
  await page.waitForSelector('button:has-text("Log in to account")');
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toBeEnabled();
  
  await loginButton.click()

  await page.waitForURL('http://localhost:3000/sign-in', { timeout: 10000 });

  // The new page should contain a visible Clerk SignIn component"
  const clerkSignIn = page.locator('[data-clerk-component="SignIn"]');
  await expect(clerkSignIn).toBeVisible();
})

