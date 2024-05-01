{
	// destructuring

	//  Object destructuring

	const user = {
		id: 123,
		name: {
			firstName: "Golam",
			lastName: "Rabby",
		},
		email: "abc@gmail.com",
		contactNumber: "0123456789",
	}

	const {
		id,
		name: { firstName },
		email,
		contactNumber,
		// we can't add type here like (email:mail)
	} = user

	const friends = ["abul", "kabul", "bulbul", "kamal", "jamal"]

	const [, , bestFriend, ...restFriend] = friends
	// first two comma for skip first two index from array
}
