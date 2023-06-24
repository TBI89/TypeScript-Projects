
import arrayOperations from "./array-operations.js";

// Array with 10 random numbers:
const arr: any = [];
for (let i = 1; i <= 10; i++) {
    const randomNumbers: any = Math.floor(Math.random() * 1000);
    arr.push(randomNumbers);
}

console.log("Sum: " + arrayOperations.getSum(arr));
console.log("Average: " + arrayOperations.getAvg(arr));
console.log("Largest: " + arrayOperations.getMax(arr));
console.log("Smallest: " + arrayOperations.getMin(arr));