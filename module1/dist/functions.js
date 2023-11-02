"use strict";
//Functions
//Normal Functions
//Array Functions
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const poorMe = {
    name: "Jubair",
    balance: 0,
    addBalance(balance) {
        return `My new balance: ${this.balance + balance}`;
    }
};
