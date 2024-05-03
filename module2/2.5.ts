{
	//

	const createArray = (params: string): string[] => {
		return [params]
	}

	const result = createArray("rabby")
	// console.log(result)

	const createArrayWithGeneric = <T>(params: T): T[] => {
		return [params]
	}
	const resultWithGeneric = createArrayWithGeneric<string>("rabby")
	// console.log(resultWithGeneric)

	type user = { id: number; name: string }
	const genericObj = createArrayWithGeneric<user>({
		id: 123,
		name: "rabby",
	})

	//---------------------//

	const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
		return [params1, params2]
	}
	const resultWithGenericTuple = createArrayWithTuple<string, number>(
		"rabby",
		10
	)
	// console.log(resultWithGenericTuple)
	const resultWithGenericTuple1 = createArrayWithTuple<
		string,
		{ name: string }
	>("rabby", { name: "rabby" })
	// console.log(resultWithGenericTuple1)

	const addStudent = <T>(student: T) => {
		const course = "next level web development"
		return {
			...student,
			course,
		}
	}
	const student1 = addStudent({
		name: "mr. X",
		email: "x@gmail.com",
		devType: "next level developer",
	})
	const student2 = addStudent({
		name: "mr. Y",
		email: "y@gmail.com",
		hasWatch: true,
	})

	//
}
