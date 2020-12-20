const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");


describe("sumMultiples", () => {
    test("it returns the sum of any numbers which are a  multiple of 3 or 5",() => { 
        expect(sumMultiples([3,5])).toBe(8);
        expect(sumMultiples([1,3,5])).toBe(8);
        expect(sumMultiples([2,3,5,10])).toBe(18);
        expect(sumMultiples([1,4,5,9,10])).toBe(24);
    })
});