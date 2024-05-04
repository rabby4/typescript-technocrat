{
	//conditional type
	type x = string
	type y = number

	type a = x extends null ? true : false
	type b = x extends null ? true : y extends undefined ? undefined : any

	// check key of object
	type Sheikh = {
		bike: string
		car: string
		ship: string
	}
	type checkVehicle<T> = T extends keyof Sheikh ? true : false

	type hasBike = checkVehicle<"bike">
	//
}
