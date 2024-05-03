{
	//
	// anything variable is any type data. that's mean we can set a string type value or boolean or number.
	let anything: any
	anything = "next level web development"

	//  if we set anything as string/number then we will get method as there type
	;(anything as string).length

	anything = 222
	;(anything as number).toFixed

	const kgToGm = (value: string | number) => {
		if (typeof value === "string") {
			const convertedValue = parseFloat(value) * 1000
			return `The result is : ${convertedValue}`
		}
		if (typeof value === "number") {
			return value * 1000
		}
	}

	//  as the result1, the variable will return 3 type data. string or number or undefined
	// if we know exactly what is the type of this variable. then we can set assertion
	// suppose we know result1 will return sting type. then we can set it as string
	const result1 = kgToGm("1000") as string

	// and we know result2 will return number type. then we can set it as number
	const result2 = kgToGm(1000) as number

	// warning: if we don't know what type would be return. then don't set assertion.
	type CustomError = {
		message: string
	}

	try {
	} catch (error) {
		// if we try to console the error message. then we will got an error. that's why we should create a custom type and set as assertion on error message
		console.log((error as CustomError).message)
	}

	//
}
