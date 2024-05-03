{
	// Generic type
	// Generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs

	// Normal generic type
	const rollNumbers: Array<number> = [2, 3, 4, 5, 6]
	const mentor: Array<string> = ["jhakar", "Mezba", "Mir"]
	const isAdmin: Array<boolean> = [true, false, true]

	// reuseable generic type
	type GenericType = Array<number>
	type GenericType1 = Array<string>
	type GenericType2 = Array<boolean>

	const rollNumbers1: GenericType = [2, 3, 4, 5, 6]
	const mentor1: GenericType1 = ["jhakar", "Mezba", "Mir"]
	const isAdmin1: GenericType2 = [true, false, true]

	// reuseable generic type with params
	type GenericTypeParam<T> = Array<T>
	const rollNumbers2: GenericTypeParam<number> = [2, 3, 4, 5, 6]
	const mentor2: GenericTypeParam<string> = ["jhakar", "Mezba", "Mir"]
	const isAdmin2: GenericTypeParam<boolean> = [true, false, true]

	// if we set generic type in array of object as object type, then we can set any type of data in object. like we can set age as number also string. also we can change the pattern of object. typescript won't given any error.
	const user: GenericTypeParam<object> = [
		{
			name: "rabby",
			age: 20,
		},
		{
			name: "rabby",
			age: "20",
		},
		{
			roll: 123,
		},
	]

	// if we set the object property and value type as generic type then it would be good practice. It maintain the tye of object property and value also object pattern
	const user2: GenericTypeParam<{ name: string; age: number }> = [
		{
			name: "rabby",
			age: 20,
		},
		{
			name: "rabby",
			age: 20,
		},
	]

	// generic tuple
	type GenericTuple<X, Y> = [X, Y]
	// generic tuple in array with string data type
	const person: GenericTuple<string, string> = ["rabby", "mehedi"]

	// generic tuple in array with number and object
	const personId: GenericTuple<number, { name: string; email: string }> = [
		123,
		{ name: "rabby", email: "a@gmail.com" },
	]
}
