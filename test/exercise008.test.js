const {
    tvRemote
} = require("../challenges/exercise008");

describe("capitalize", () => {
    test("returns a capitalized string", () => {
        expect(tvRemote("d")).toBe(4);
    })
});