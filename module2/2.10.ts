{
	//
	// Mapped type
	const arrOfNumbers: number[] = [1, 2, 3, 4, 5]
	// const arrOfString: string[] = ["1", "2", "3", "4", "5"]
	const arrOfString: string[] = arrOfNumbers.map((number) => number.toString())
	console.log(arrOfString)

	type areaNumber = {
		height: number
		width: number
	}

	type areaString = {
		[key in keyof areaNumber]: string
	}
	//
}
