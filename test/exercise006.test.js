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

describe("isValidDNA", () => {
    test("it tests whether it is a valid DNA string",() => { 
        expect(isValidDNA("C")).toBe(true);
        expect(isValidDNA("G")).toBe(true);
        expect(isValidDNA("T")).toBe(true);
        expect(isValidDNA("A")).toBe(true);
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTAB")).toBe(false);
        expect(isValidDNA("CKA")).toBe(false);
        expect(isValidDNA("X")).toBe(false);
    })
});