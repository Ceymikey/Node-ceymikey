const ceymikey = require('ceymikey-expansion');

ceymikey.printOut();

ceymikey.executeConsoleString('Test console string');

// NEW DATA STRUCTURE
ceymikey.compile({
  data: {
    bits: ['ceymikey.ALLOW'],
    bytes: ['ceymikey.CONTENT']
  }
});