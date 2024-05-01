// Normal Function
// Arrow Function

// Normal function
function add(num1: number, num2: number): number {
	return num1 + num2
}
add(2, 3)

// Arrow function
const addNumber = (num1: number, num2: number): number => num1 + num2

const poorMan = {
	name: "Rabby",
	balance: 0,
	addBalance(balance: number): string {
		return `My new balance is ${this.balance + balance}`
	},
}

const arr: number[] = [2, 4, 6]

const newArray = arr.map((element: number) => element * element)
