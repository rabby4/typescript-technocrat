{
	// Ternary operator || Optional chaining || nullish coalescing operator

	const age: number = 18
	if (age >= 18) {
		// console.log("adult")
	} else {
		// console.log("not adult")
	}

	const isAdult = age >= 18 ? "adult" : "not adult"
	// console.log(isAdult)

	// nullish coalescing operator
	// if the input is null or undefined then the output would be true

	const isAuthenticate = ""

	const result1 = isAuthenticate ?? "Guest"
	const result2 = isAuthenticate ? isAuthenticate : "Guest"
	// console.log({ result1 }, { result2 })

	// Optional chaining

	type User = {
		name: string
		address: {
			city: string
			road: string
			presentAddress: string
			permanentAddress?: string
		}
	}

	const user: User = {
		name: "Rabby",
		address: {
			city: "Chandpur",
			road: "Rahimanagar",
			presentAddress: "Rahimanagar",
		},
	}
	const permanentAddress =
		user?.address?.permanentAddress ?? "No Permanent Address"
	console.log({ permanentAddress })
}
