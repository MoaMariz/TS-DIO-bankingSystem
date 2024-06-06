import {Account} from './DioAccount'

export class BusinessAccount extends Account {
    cnpj: number

    constructor(cnpj:number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.cnpj = cnpj
    }

    public getLoan = (loan:number):void => {
        if(this.validateStatus()) {
            this.setterBalance(this.getterBalance() + loan)
            console.log(`Loan successful! ${this.getterName()}, your new balance is ${this.getterBalance()}`);
        } else {
            throw new Error;
        }
    }
} 
