import { test, expect } from '@playwright/test';

test('should navigate to the sign-in page and display the Clerk sign-in window', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')

  // Find and click the button with the text 'Log in to account'
  await page.click('text=Log in to account')

  // The new URL should be "/sign-in" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/sign-in')

  // The new page should contain a visible Clerk SignIn component"
  const clerkSignIn = page.locator('[data-clerk-component="SignIn"]'); // Adjust the selector if necessary
  await expect(clerkSignIn).toBeVisible();
})

