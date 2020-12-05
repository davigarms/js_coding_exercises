const {
    tvRemote
} = require("../challenges/exercise008");

describe("capitalize", () => {
    test("returns a capitalized string", () => {
        expect(tvRemote("does")).toBe(16);
        expect(tvRemote("Does")).toBe(40);
    })
});