{
	// OOP - inheritance

	class Person {
		name: string
		age: number
		address: string

		constructor(name: string, age: number, address: string) {
			this.name = name
			this.age = age
			this.address = address
		}
		getSleep(numberOfHours: number) {
			console.log(`${this.name} will sleep for ${numberOfHours}`)
		}
	}

	class Student extends Person {
		constructor(name: string, age: number, address: string) {
			super(name, age, address)
		}
	}

	const student1 = new Student("rabby", 27, "chandpur")

	class Teacher extends Person {
		designation: string

		constructor(
			name: string,
			age: number,
			address: string,
			designation: string
		) {
			super(name, age, address)
			this.designation = designation
		}

		takeClass(numberOfHours: number) {
			console.log(`${this.name} will take ${numberOfHours}`)
		}
	}
	const teacher = new Teacher("rabby", 27, "chandpur", "professor")

	//
}
