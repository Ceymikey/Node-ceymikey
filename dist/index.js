"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeConsoleString = exports.printOut = void 0;
// src/index.ts
const printOut = () => {
    console.log('Test printOut succes');
};
exports.printOut = printOut;
const executeConsoleString = (consoleString) => {
    console.log(`Constole string executed with succes`);
};
exports.executeConsoleString = executeConsoleString;
