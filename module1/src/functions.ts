
//Functions
//Normal Functions
//Array Functions

function add(num1: number, num2: number) {
    return num1 + num2;
}

add(2, 2)

const poorMe = {
    name: "Jubair",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance: ${this.balance + balance}`;
    }
}