{
	//
	//Pick type
	type Person = {
		name: string
		age: number
		email?: string
		contactNo: number
	}

	type Name = Pick<Person, "name" | "age">
	type ContactInfo = Omit<Person, "name" | "age">
	type personRequired = Required<Person>
	type personPartial = Partial<Person>

	type personReadonly = Readonly<Person>

	const person1: personReadonly = {
		name: "mr, X",
		age: 20,
		contactNo: 123,
	}

	type myObj = Record<string, string>

	const obj1: myObj = {
		a: "aa",
		b: "bb",
	}

	//
}
