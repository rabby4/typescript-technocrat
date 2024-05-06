{
	// access modifier
	class BankAccount {
		public readonly id: number
		public name: string
		protected _balance: number

		constructor(id: number, name: string, balance: number) {
			this.id = id
			this.name = name
			this._balance = balance
		}

		addBalance(amount: number) {
			this._balance = this._balance + amount
		}
		getBalance() {
			return this._balance
		}
	}

	class Student extends BankAccount {
		test() {
			this._balance
		}
	}

	const goribAccount = new BankAccount(321, "Mr, Gorib", 20)
	goribAccount.addBalance(450)
	const myBalance = goribAccount.getBalance()
	console.log(myBalance)
	//
}
