{
	// union type
	// 	type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"
	// 	type FullstackDeveloper = "frontendDeveloper" | "expressDeveloper"
	//
	// 	type Developer = FrontendDeveloper | FullstackDeveloper
	//
	// 	const newDev: FrontendDeveloper = "fakibazDeveloper"
	//
	// 	type User = {
	// 		name: string
	// 		email?: string
	// 		gender: "male" | "female"
	// 		blood: "O+" | "B+" | "AB+"
	// 	}
	//
	// 	const user1: User = {
	// 		name: "Rabby",
	// 		gender: "male",
	// 		blood: "O+",
	// 	}

	//Intersection Types
	type FrontendDeveloper = {
		skills: string[]
		designation1: "frontend developer"
	}
	type BackendDeveloper = {
		skills: string[]
		designation2: "backend developer"
	}

	type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

	const newDeveloper: FullstackDeveloper = {
		skills: ["HTML", "CSS", "JS"],
		designation1: "frontend developer",
		designation2: "backend developer",
	}
}
