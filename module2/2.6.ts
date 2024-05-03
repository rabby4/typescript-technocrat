{
	//Constraints In Typescript

	// there is we should extends the params with an object that these property should be included. otherwise it would be show error. when we add the required field then we can also add extra field on the object
	const addStudent = <T extends { id: number; name: string; email: string }>(
		student: T
	) => {
		const course = "next level web development"
		return {
			...student,
			course,
		}
	}
	const student1 = addStudent({
		id: 112,
		name: "mr. X",
		email: "x@gmail.com",
		devType: "next level developer",
	})
	const student2 = addStudent({
		id: 222,
		name: "mr. Y",
		email: "y@gmail.com",
		hasWatch: true,
	})
}
