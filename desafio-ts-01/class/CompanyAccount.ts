import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

	constructor(name: string, accountNumber: number) {
		super(name, accountNumber)
	}

	getLoan = (value: number): void => {
		if (this.getStatus()) {
			this.setBalance(this.getBalance() + value)
			console.log('Voce pegou um empréstimo de R$ ' + value + '.')
		} else {
			console.log('Empréstimo negado.')
		}
	}
}
