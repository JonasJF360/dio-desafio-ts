import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

console.log('-------------------------------------------')

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(300)
peopleAccount.withdraw(100)
console.log(peopleAccount)

console.log('-------------------------------------------')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(150.33)
companyAccount.withdraw(100)
console.log(companyAccount)

console.log('-------------------------------------------')

const specialAccount = new SpecialAccount('Jonas', 30)
specialAccount.deposit(50)
specialAccount.withdraw(25.31)
console.log(specialAccount)

console.log('-------------------------------------------')