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
})

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
})

describe("getComplementaryDNA", () => {
    test("it returns a string of the complementary base pairs of a valid DNA given",() => { 
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("G")).toBe("C");
        expect(getComplementaryDNA("TACG")).toBe("ATGC");
        expect(getComplementaryDNA("AGCTGA")).toBe("TCGACT");
    })
})

describe("isItPrime", () => {
    test("check if a given number is prime",() => { 
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(1)).toBe(true);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(17)).toBe(true);
        expect(isItPrime(449)).toBe(true);
        expect(isItPrime(1245)).toBe(false);
        expect(isItPrime(7907)).toBe(true);
        expect(isItPrime(84921)).toBe(false);
    })
})

describe("createMatrix", () => {
    test("it receives a number and return an array of n arrays",() => { 
        expect(createMatrix(1, "foo")).toStrictEqual(
            [
                ["foo"]
            ]
        )
        expect(createMatrix(2, "foo")).toStrictEqual(
            [
                ["foo", "foo"],
                ["foo", "foo"]
            ]
        )
        expect(createMatrix(3, "foo")).toStrictEqual(
            [
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"]
            ]
        )
        expect(createMatrix(4, "goku")).toStrictEqual(
            [
                ["goku", "goku", "goku", "goku"],
                ["goku", "goku", "goku", "goku"],
                ["goku", "goku", "goku", "goku"],
                ["goku", "goku", "goku", "goku"]
            ]
        )
    })

    describe("areWeCovered", () => {
        test("check whether are enough staff scheduled for the given day",() => { 
            expect(areWeCovered(
                [
                    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
                ], "Monday"
            )).toBe(false);
            expect(areWeCovered(
                [
                    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                    { name: "John", rota: ["Friday", "Tuesday", "Wednesday", "Thursday"] }
                ], "Monday"
            )).toBe(false);
            expect(areWeCovered(
                [
                    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                    { name: "John", rota: ["Friday", "Tuesday", "Wednesday", "Thursday"] }
                ], "Tuesday"
            )).toBe(true);
        })
    })
})