import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        const new_value: number = value + 10
        this.setBalance(this.getBalance() + new_value)
        console.log('Foi depositado R$ ' + new_value + ' na sua conta especial.')
    }
}