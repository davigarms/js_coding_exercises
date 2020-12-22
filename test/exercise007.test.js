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

describe("createRange", () => {
    test("creates a range of numbers as an array with a step between them",() => { 
        expect(createRange(1,5)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(createRange(3,11,2)).toStrictEqual([3, 5, 7, 9, 11]);
        expect(createRange(3,12,2)).toStrictEqual([3, 5, 7, 9, 11]);
        expect(createRange(12,100,4)).toStrictEqual([
            12, 16, 20, 24, 28, 32,  36, 40,
            44, 48, 52, 56, 60, 64,  68, 72,
            76, 80, 84, 88, 92, 96, 100
          ]);
        
    })
})
