import {fizzbuzz} from "../fizzbuzz";

// Write a function that takes a number as input and returns "Fizz" if the number is divisible by 3, 
// "Buzz" if divisible by 5, "FizzBuzz" if divisible by both 3 and 5, and the number itself otherwise.

test("jagub 3 ja 5(fizzbuzz)", ()=>{
    expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test("jagub ainult 3(buzz)",()=> {
    expect(fizzbuzz(9)).toBe("buzz");
});

test("jagub ainult 5(fizz)",()=> {
    expect(fizzbuzz(100)).toBe("fizz");
});

test("ei jagu 3 ega 5(arv)",()=> {
    expect(fizzbuzz(7)).toBe("7");
});

