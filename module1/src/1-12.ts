{
	// nulled type
	const searchName = (value: string) => {
		if (value) {
			console.log("searching")
		} else {
			console.log("there is nothing to search")
		}
	}
	searchName("Rabby")

	// Unknown type
	const getSpeedInMeterPerSecond = (value: unknown) => {
		if (typeof value === "number") {
			const convertSpeed = (value * 1000) / 3600
			console.log(`the speed is ${convertSpeed}`)
		} else if (typeof value === "string") {
			const breakValue = value.split(" ")
			const resultValue = breakValue[0]
			const convertSpeed = (parseFloat(resultValue) * 1000) / 3600
			console.log(`the speed is ${convertSpeed}`)
		} else {
			console.log("Wrong Input")
		}
	}

	getSpeedInMeterPerSecond(null)

	// never type
	const throwError = (msg: string): never => {
		throw new Error(msg)
	}
	throwError("Galti se error ho gaya")
}
