import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "",
    specPattern: "./cypress/e2e/**.*",
    baseUrl: "https://www.demoblaze.com"
  },
});
