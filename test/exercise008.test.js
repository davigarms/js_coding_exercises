const {
    tvRemote
} = require("../challenges/exercise008");

describe("capitalize", () => {
    test("returns a capitalized string", () => {
        expect(tvRemote("does")).toBe(16);
        expect(tvRemote("your")).toBe(23);
        expect(tvRemote("solution")).toBe(33);
    })
});