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

describe("getScreentimeAlertList", () => {
    test("creates a range of numbers as an array with a step between them",() => { 
        let users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                           { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                           { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                           { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                           { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
                          ]
             },
             {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                           { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                           { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                           { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
                          ]
             }
            ];
        expect(getScreentimeAlertList(users,"2019-05-04")).toStrictEqual(["beth_1234"]);

        users = [
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                           { date: "2019-05-09", usage: { twitter: 12, instagram: 15, facebook: 19} },
                           { date: "2019-05-10", usage: { twitter: 15, instagram: 40, facebook: 89} }
                          ]
             },
             {
              username: "tim_taylor_32",
              name: "Tim Taylor",
              screenTime: [
                           { date: "2019-05-10", usage: { twitter: 20, instagram: 56, facebook: 65} }
                          ]
             }
            ];
        expect(getScreentimeAlertList(users,"2019-05-10")).toStrictEqual(["sam_j_1989","tim_taylor_32"]);

        users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                            { date: "2019-05-10", usage: { twitter: 15, instagram: 40, facebook: 89} },
                            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} }
                          ]
             },
             {
              username: "tim_taylor_32",
              name: "Tim Taylor",
              screenTime: [
                           { date: "2019-06-13", usage: { twitter: 20, instagram: 56, facebook: 10} }
                          ]
             }
            ];
        expect(getScreentimeAlertList(users,"2019-06-13")).toStrictEqual([]);
    })
})

describe("hexToRGB", () => {
    test("convert hex to rgb color",() => { 
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#5eba7d")).toBe("rgb(94,186,125)");
    })
})
