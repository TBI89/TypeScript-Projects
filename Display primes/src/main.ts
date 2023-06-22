
// Collect 2 numbers from the user:
const firstNum: number = +prompt("Please enter first number");
const secondNum: number = +prompt("Please enter the second number");

// Function that finds prime numbers:
function isPrime(num: number): boolean {
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
    for (let i: number = firstNum; i <= secondNum; i++) {
        if (isPrime(i)) {
            document.write(i + ", "); //Display the primes
        }
    }
}
else if (secondNum < firstNum) {
    for (let i: number = secondNum; i <= firstNum; i++) {
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
