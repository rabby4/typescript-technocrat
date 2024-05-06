{
	//Instance Of guard
	class Animal {
		name: string
		species: string

		constructor(name: string, species: string) {
			this.name = name
			this.species = species
		}

		makeSound() {
			console.log("I'm making sound")
		}
	}

	class Dog extends Animal {
		constructor(name: string, species: string) {
			super(name, species)
		}
		makeBark() {
			console.log(`I'm barking`)
		}
	}
	class Cat extends Animal {
		constructor(name: string, species: string) {
			super(name, species)
		}
		makeMewao() {
			console.log(`I'm Mewaing`)
		}
	}

	// smart way te handle korte chaile amra function bebohar korte pari
	const isDog = (animal: Animal): animal is Dog => {
		return animal instanceof Dog
	}
	const isCat = (animal: Animal): animal is Cat => {
		return animal instanceof Cat
	}

	const getAnimal = (animal: Animal) => {
		if (isDog(animal)) {
			animal.makeBark()
		} else if (isCat(animal)) {
			animal.makeMewao()
		} else {
			animal.makeSound()
		}
	}

	const dog = new Dog("Dog bhai", "Dog")
	const cat = new Cat("Cat Bhai", "Cat")

	getAnimal(dog)
	//
}
