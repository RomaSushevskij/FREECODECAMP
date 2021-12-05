function isPrime(num) {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

function sumPrimes(num) {
    return Array(num).fill(1).map((item, index) => item + index).filter(item => isPrime(item)).reduce((sum, item) => item <= num ? sum + item : null, 0)
}

sumPrimes(10);