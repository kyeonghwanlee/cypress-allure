// You can read more here:
// https://on.cypress.io/configuration

import '@shelex/cypress-allure-plugin';
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('list not defined')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})
