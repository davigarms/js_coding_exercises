const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("it takes a number and returns the sum of all its digits",() => { 
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1234)).toBe(10);
        expect(sumDigits(459)).toBe(18);
        expect(sumDigits(45329)).toBe(23);
    })
})