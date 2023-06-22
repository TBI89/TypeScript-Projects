// Collect 2 numbers from the user:
const firstNum = +prompt("Please enter first number");
const secondNum = +prompt("Please enter the second number");
// Function that finds prime numbers:
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Check for prime numbers between the 2:
if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
        if (isPrime(i)) {
            document.write(i + ", "); //Display the primes
        }
    }
}
else if (secondNum < firstNum) {
    for (let i = secondNum; i <= firstNum; i++) {
        if (isPrime(i)) {
            document.write(i + ", "); //Display the primes
        }
    }
}
else {
    if (isPrime(firstNum)) {
        document.write(firstNum + ", "); //Display the prime
    }
}
