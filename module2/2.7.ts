{
	//
	// generic constraint with keyof operator
	type Vehicle = {
		bike: string
		car: string
		ship: string
	}

	type Owner = "bike" | "can" | "ship" // manually
	type Owner2 = keyof Vehicle

	const getObjectKey = <X, Y extends keyof X>(obj: X, key: Y) => {
		return obj[key]
	}

	const person = {
		name: "rabby",
		age: 27,
		por: "developer",
	}

	const getKey = getObjectKey(person, "por")
	console.log(getKey)

	//
}
