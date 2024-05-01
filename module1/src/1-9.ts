{
	// type alias
	// Object type alias
	type Student = {
		firstName: string
		lastName: string
		contactNo: number
	}
	const student1: Student = {
		firstName: "Golam",
		lastName: "Rabby",
		contactNo: 123456789,
	}
	const student2: Student = {
		firstName: "Golam",
		lastName: "Rabby",
		contactNo: 123456789,
	}
	const student3: Student = {
		firstName: "Golam",
		lastName: "Rabby",
		contactNo: 123456789,
	}

	// string type alias
	type Name = string
	const firstName: Name = "Rabby"

	type IsAdmin = boolean
	const isAdmin: IsAdmin = true

	// function type alias
	type Add = (num1: number, num2: number) => number

	const add: Add = (num1, num2) => num1 + num2
}
