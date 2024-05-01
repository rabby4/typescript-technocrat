{
	// spread operator
	// rest operator
	// destructuring

	// spread operator
	const arr: string[] = ["mehedi", "fahad"]
	const arr2: string[] = ["rabby", "najir"]

	arr.push(...arr2)

	const mentor = {
		Mezba: "typescript",
		Mir: "Redux",
	}
	const mentor2 = {
		nextjs: "tonmoy",
		cloud: "nahid",
	}

	const allMentor = {
		...mentor,
		...mentor2,
	}

	// learn rest operator

	const myFriends = (...friends: string[]) => {
		// console.log()
		friends.forEach((friend: string) => {
			console.log(`Hi, ${friend}`)
		})
	}

	myFriends("aboul", "babul")
}
