{
	//
	// Abstractions
	// idea
	interface Vehicle1 {
		startEngine(): void
		stopEngine(): void
		move(): void
	}

	class Car implements Vehicle1 {
		startEngine(): void {
			console.log("The engine is starting")
		}
		stopEngine(): void {
			console.log("The engine is stopped")
		}
		move(): void {
			console.log("The car is moving")
		}
		test() {
			console.log("Car is testing")
		}
	}
	const toyotaCar = new Car()
	toyotaCar.startEngine()

	abstract class Car2 {
		abstract startEngine(): void
		abstract stopEngine(): void
		abstract move(): void
		test() {
			console.log("Car is testing")
		}
	}

	class HondaCar extends Car2 {
		startEngine(): void {
			console.log("The car is starting")
		}
		stopEngine(): void {
			console.log("The engine is stopped")
		}
		move(): void {
			console.log("The car is moving")
		}
	}
	const hondaCar = new HondaCar()
	hondaCar.startEngine()
	// const hondaCar = new Car2()
	// hondaCar.startEngine()

	//
}
