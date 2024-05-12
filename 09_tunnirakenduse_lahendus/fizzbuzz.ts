export function fizzbuzz(a: number): string {
    if(a % 5 == 0 && a % 3 == 0) {
        return "fizzbuzz";
    } else if(a % 3 == 0) {
        return "buzz";
    } else if(a % 5 == 0) {
        return "fizz";
    } else {
        return a.toString();
    }
}

// for (let i = 0; i <= 100; i++) {
//     console.log(fizzbuzz(i));
// }