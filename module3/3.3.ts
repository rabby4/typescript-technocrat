{
	// type guards
	// typeof --> type guards

	type Alphanumeric = string | number

	const add = (params1: Alphanumeric, params2: Alphanumeric): Alphanumeric => {
		if (typeof params1 === "number" && typeof params2 === "number") {
			return params1 + params2
		} else {
			return params1.toString() + params2.toString()
		}
	}

	const result = add("2", "3")
	// console.log(result)

	// in guards
	type NormalUser = {
		name: string
	}
	type AdminUser = {
		name: string
		role: "admin"
	}

	const getUser = (user: NormalUser | AdminUser) => {
		if ("role" in user) {
			console.log(`My name is ${user.name} and I'm a ${user.role}`)
		} else {
			console.log(`My name is ${user.name} and I'm a normal user`)
		}
	}

	const normalUser: NormalUser = {
		name: "baker bhai",
	}
	const adminUser: AdminUser = {
		name: "pro bhai",
		role: "admin",
	}

	getUser(adminUser)

	//
}
