import { test, expect } from '@playwright/test';  // Playwright's own test and expect APIs

test('submits the form successfully', async ({ page }) => {
  await page.goto('http://localhost:3000');  // Adjust port if necessary


  // Fill out the form fields
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');

  // Click the submit button
  await page.click('button[type="submit"]');

  // Assert that the success message appears (Playwright style)
  const successMessage = await page.locator('text=Form submitted successfully!');
  await expect(successMessage).toBeVisible();  // Playwright-specific assertion
});

test('shows validation errors when fields are empty', async ({ page }) => {
  await page.goto('http://localhost:3000');  // Adjust port if necessary


  // Click submit without filling the form
  await page.click('button[type="submit"]');

  // Validate that error messages are shown for required fields
  const nameError = await page.locator('text=This field is required').first();
  await expect(nameError).toBeVisible();

  const emailError = await page.locator('text=This field is required').nth(1);
  await expect(emailError).toBeVisible();
});
