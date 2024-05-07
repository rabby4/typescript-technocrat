{
	// polymorphism
	class Person {
		getSleep() {
			console.log(`I'm sleeping for 8 hours a day`)
		}
	}

	class Student extends Person {
		getSleep() {
			console.log(`I'm sleeping for 7 hours a day`)
		}
	}

	class Developer extends Person {
		getSleep() {
			console.log(`I'm sleeping for 6 hours a day`)
		}
	}

	const sleepingHours = (params: Person) => {
		params.getSleep()
	}

	const person1 = new Person()
	const person2 = new Student()
	const person3 = new Developer()

	sleepingHours(person1)
	sleepingHours(person2)
	sleepingHours(person3)

	class Shape {
		getArea(): number {
			return 0
		}
	}

	class Circle extends Shape {
		radius: number

		constructor(radius: number) {
			super()
			this.radius = radius
		}

		getArea(): number {
			return Math.PI * this.radius * this.radius
		}
	}

	class Rectangle extends Shape {
		height: number
		width: number

		constructor(height: number, width: number) {
			super()
			this.height = height
			this.width = width
		}
		getArea() {
			return this.height * this.width
		}
	}

	const getShapeArea = (params: Shape) => {
		console.log(params.getArea())
	}

	const shape1 = new Shape()
	const shape2 = new Circle(5)
	const shape3 = new Rectangle(5, 10)
	getShapeArea(shape1)
	getShapeArea(shape2)
	getShapeArea(shape3)
	//
}
