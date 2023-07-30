// Example 1: of a synchronous program.
// The browser steps through the program one line at a time
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);

// Example 2: of a synchronous program
// This is also an asynchronous function because the caller has to wait for the
// for the function to finish its work and return a value before the caller can
// continue.
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const nameA = "Miriam";
const greetingA = makeGreeting(nameA)
console.log(greetingA);


// Example 3: Long running synchronous function
// while generate primes is running, our program is completely unresponsive.
const MAX_PRIME = 1000000;

function isPrime(n){
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % 1 === 0){
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota){
    const primes = [];
    while (primes.length < quota){
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)){
            primes.push(candidate);
        }
    }
    return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.location.reload();
})


