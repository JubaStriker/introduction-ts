const age: number = 19

if (age > 18) {
    console.log('Adult')
} else {
    console.log('Not adult')
}

const isAdult = age >= 18 ? 'Adult' : 'NotAdult';
console.log({ isAdult })

const isAuthenticated = '';

const res1 = isAuthenticated ?? 'Guest';
const res2 = isAuthenticated ? isAuthenticated : 'Guest';

// ?? only checks for null or undefined

console.log({ res1 }, { res2 })