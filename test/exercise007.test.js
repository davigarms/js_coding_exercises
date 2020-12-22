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
    })
    test("it takes a number and returns the sum of all its digits",() => { 
        expect(sumDigits(1234)).toBe(10);
    })
    test("it takes a number and returns the sum of all its digits",() => { 
        expect(sumDigits(45329)).toBe(23);
    })
})