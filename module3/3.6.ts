{
	//
	class BankAccount {
		public readonly id: number
		public name: string
		protected _balance: number

		constructor(id: number, name: string, balance: number) {
			this.id = id
			this.name = name
			this._balance = balance
		}

		set addBalance(amount: number) {
			this._balance = this._balance + amount
		}

		// addBalance(amount: number) {
		// 	this._balance = this._balance + amount
		// }
		// getBalance() {
		// 	return this._balance
		// }

		get balance() {
			return this._balance
		}
	}

	const goribAccount = new BankAccount(321, "Mr, Gorib", 50)
	// goribAccount.addBalance(450)
	goribAccount.addBalance = 30
	// const myBalance = goribAccount.getBalance()

	const myBalance = goribAccount.balance
	console.log(myBalance)
	//
}
