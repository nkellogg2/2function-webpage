const { test, expect } = require("@jest/globals");
const fxns = require("./testfunctions.js");

test("Removes vowels from a lowercase phrase", () => {
    expect(disemvowel("hello people")).toBe("hll ppl");
});

test("Removes vowels from an uppercase phrase", () => {
    expect(disemvowel("HELLO PEOPLE")).toBe("HLL PPL");
});

test("Removes vowels from a phrase with mixed case and punctuation", () => {
    expect(disemvowel("How are you Jimmy?!")).toBe("Hw r y Jmmy?!");
});

test("Tries to remove vowels from an empty string, throws error", () => {
    expect(disemvowel("")).toThrow();
});

test("Removes vowels from a phrase with no letters", () => {
    expect(disemvowel("452,548")).toBe("452,548");
});