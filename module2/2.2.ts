{
	//
	// Interface

	// normal type alias
	type User1 = {
		name: string
		age: number
	}

	// Interface type
	interface User2 {
		name: string
		age: number
	}

	// Interface is one kind of type alias. But there is some difference. we can use type alias in primitive type data. But we can't use Interface in primitive data type. because, Interface type start with curly bracket. So, we will use type alias for primitive data type. for Object we will use interface also we can use type alias in Object

	const user: User2 = {
		name: "Rabby",
		age: 123,
	}

	// Intersection with type alisa and extra field

	// here we create a type with User1 filed and add extra field roll. Now, when we crate a new object, we must be need to add this extra filed. otherwise we will get an error
	type UserWithRoll = User1 & { roll: string }

	// we can also do this with interface. when we use interface, then we don't use intersection, but we can use extends keyword.
	interface UserWithRoll2 extends User1 {
		roll: string
	}

	const UserWithRoll2: UserWithRoll = {
		name: "Rabby",
		age: 27,
		roll: "1234",
	}

	// we can also declare interface for array and function. because array and function is one kind of object
	// this interface for array
	interface Roll1 {
		// here index is number type and array values are number type
		[index: number]: number
	}

	const roleNumber1: Roll1 = [1, 2, 3, 4]

	// it's type alias for a function.
	type Add1 = (num1: number, num2: number) => number

	// it's interface type for the same function
	interface Add2 {
		// the first parameter is number type, the second parameter is number type also the function will return the number type value
		(num1: number, num2: number): number
	}

	const add: Add2 = (num1, num2) => num1 + num2

	//
}
