"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = exports.executeConsoleString = exports.printOut = void 0;
const printOut = () => {
    console.log('Test printOut success');
};
exports.printOut = printOut;
const executeConsoleString = (consoleString) => {
    console.log(`Console string executed with success: ${consoleString}`);
};
exports.executeConsoleString = executeConsoleString;
const compile = (input) => {
    try {
        const { data } = input;
        if (!data || !data.bits || !Array.isArray(data.bits) || !data.bytes || !Array.isArray(data.bytes)) {
            throw new Error('Invalid data structure: "bits" or "bytes" arrays are missing or not arrays.');
        }
        // Check if "ceymikey.ALLOW" is in the bits array
        if (data.bits.includes('ceymikey.ALLOW')) {
            console.log('allowed!');
        }
        else {
            console.log(`Invalid Data type => ${data.bits} is not a function!\n\n Please fix this issue before rerunning the code.`);
        }
        // Check if "ceymikey.CONTENT" is in the bytes array
        if (data.bytes.includes('ceymikey.CONTENT')) {
            console.log('Content allowed!');
        }
        else {
            console.log(`Invalid Data type => ${data.bytes} is not a function!\n\n Please fix this issue before rerunning the code.`);
        }
        // Check if "ceymikey.DENY" is in the bits array
        if (data.bits.includes('ceymikey.DENY')) {
            console.log('Ceymikey denied');
        }
        else {
            console.log(`Invalid Data type => ${data.bits} is not a function!\n\n Please fix this issue before rerunning the code.`);
        }
    }
    catch (error) {
        console.error(`Error in compile: ${error}`);
    }
};
exports.compile = compile;
