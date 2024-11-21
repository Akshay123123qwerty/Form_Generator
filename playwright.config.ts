import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',  // This will start your app before running the tests
    port: 5173,  // Ensure this matches the port your app is running on
  },
});
