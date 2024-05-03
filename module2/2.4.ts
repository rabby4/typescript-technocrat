{
	//
	// Interface - generic type
	// if there is default value of 2nd params then we don't need the interface or type alias on the object
	interface Developer<T, X = null> {
		name: string
		computer: {
			brand: string
			model: string
			year: number
		}
		smartWatch: T
		bike?: X
	}

	// we can send an object as params in generic type. if we don't have any value for 2nd params then we can set it null
	const poorDeveloper: Developer<
		{
			brand: string
			model: string
			display: string
		},
		null
	> = {
		name: "Rabby",
		computer: {
			brand: "HP",
			model: "eliteBook 840",
			year: 2014,
		},
		smartWatch: {
			brand: "apple",
			model: "ac20",
			display: "OLED",
		},
	}

	// we can send object with extra field as much we need. If we have 2nd params then we can also send it with interface or type alias
	interface Yamaha {
		company: string
	}
	const richDeveloper: Developer<
		{
			brand: string
			model: string
			heartTrack: boolean
			sleepTrack: boolean
		},
		Yamaha
	> = {
		name: "Rabby",
		computer: {
			brand: "HP",
			model: "eliteBook 840",
			year: 2014,
		},
		smartWatch: {
			brand: "apple",
			model: "ac20",
			heartTrack: true,
			sleepTrack: true,
		},
		bike: {
			company: "yeamaha",
		},
	}

	// we can also make a interface for the extra filed. like there is extra filed of smartWatch. so we can make a interface type for smartWatch. it would be help clean our code.
	interface poorDeveloperInfo {
		brand: string
		model: string
		display: string
	}
	// we make a interface called "poorDeveloperInfo" and pass it as params
	const poorDeveloper1: Developer<poorDeveloperInfo, null> = {
		name: "Rabby",
		computer: {
			brand: "HP",
			model: "eliteBook 840",
			year: 2014,
		},
		smartWatch: {
			brand: "apple",
			model: "ac20",
			display: "OLED",
		},
	}

	// here is another example for richDeveloper. we use interface. we can also use type alias
	interface richDeveloperInfo {
		brand: string
		model: string
		heartTrack: boolean
		sleepTrack: boolean
	}

	const richDeveloper1: Developer<richDeveloperInfo, null> = {
		name: "Rabby",
		computer: {
			brand: "HP",
			model: "eliteBook 840",
			year: 2014,
		},
		smartWatch: {
			brand: "apple",
			model: "ac20",
			heartTrack: true,
			sleepTrack: true,
		},
	}

	//
}
