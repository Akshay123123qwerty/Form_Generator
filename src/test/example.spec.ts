import { test, expect } from '@playwright/test';

const mockSchema = {
  formTitle: 'Test Form',
  formDescription: 'This is a test form',
  fields: [
    { id: 'name', label: 'Name', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
  ],
};

test('should submit the dynamic form successfully', async ({ page }) => {
  // Assuming that your form is rendered based on the `mockSchema`
  await page.goto('/');  // Adjust the route if necessary

  // Fill out the form based on the dynamic input names
  await page.fill(`input[name="name"]`, 'John Doe');
  await page.fill(`input[name="email"]`, 'john@example.com');

  // Click the submit button (make sure the button text matches the generated button)
  await page.click('button[type="submit"]');

  // Wait for the success message and check if it's visible
  const successMessage = await page.locator('text=Form submitted successfully!');
  await expect(successMessage).toBeVisible();
});

test('should show validation errors when fields are empty', async ({ page }) => {
  await page.goto('/');  // Adjust route as needed
  
  // Click the submit button without filling the form
  await page.click('button[type="submit"]');

  // Wait for the validation error message (Assuming the error text is generated dynamically)
  const nameError = await page.locator('text=This field is required').first();
  await expect(nameError).toBeVisible();

  const emailError = await page.locator('text=This field is required').nth(1);
  await expect(emailError).toBeVisible();
});
