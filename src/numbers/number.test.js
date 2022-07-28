import {oddNumbers, evenNumbers, filterfn, isOdd} from "./number.js";

describe("Testing is there are odd numbers", () =>{
    test("All numbers in the list are odd", () => {
        expect(filterfn([1,3,5,7,9]), isOdd).toStrictEqual([1,3,5,7,9])
    });
    test("No numbers in the list are odd", () => {
        expect(filterfn([2,4,6,8,10]), isOdd).toStrictEqual([])
    });
    test("Some numbers in the list are odd", () => {
        expect(filterfn([2,3,5,6,10]), isOdd).toStrictEqual([3,5])
    });
})

describe("Testing is there are even numbers", () =>{
    test("No numbers in the list are even", () => {
        expect(evenNumbers([1,3,5,7,9])).toStrictEqual([])
    });
    test("All numbers in the list are even", () => {
        expect(evenNumbers([2,4,6,8,10])).toStrictEqual([2,4,6,8,10])
    });
    test("Some numbers in the list are even", () => {
        expect(evenNumbers([2,3,5,6,10])).toStrictEqual([2,6,10])
    });
})