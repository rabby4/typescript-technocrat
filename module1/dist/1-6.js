"use strict";
{
    // Normal Function
    // Arrow Function
    // Normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    // Arrow function
    const addNumber = (num1, num2) => num1 + num2;
    const poorMan = {
        name: "Rabby",
        balance: 0,
        addBalance(balance) {
            return `My new balance is ${this.balance + balance}`;
        },
    };
    const arr = [2, 4, 6];
    const newArray = arr.map((element) => element * element);
}
