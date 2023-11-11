export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }
  
  getName = (): string => {
    return this.name
  }
  
  getBalance = (): number => {
    return this.balance
  }

  getStatus = (): boolean => {
    return this.status
  }
  
    // setName = (name: string): void => {
    //   this.name = name
    //   console.log('Nome alterado com sucesso!')
    // }

  setBalance = (balance: number): void => {
    this.balance = + balance
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log('Voce depositou R$ ' + value + ' na sua conta.')
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && value <= this.balance) {
      this.balance -= value
      console.log('Voce sacou R$ ' + value + ' da sua conta.')
    }
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
