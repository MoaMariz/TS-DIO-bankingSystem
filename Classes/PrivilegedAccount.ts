import {Account} from './DioAccount'

export class PrivilegedAccount extends Account {


    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    public deposit = (deposit:number):void => {
        if(this.validateStatus()) {
            this.setterBalance(this.getterBalance() + deposit + 10)
            console.log(`Deposit successful! ${this.getterName()} Your new balance is ${this.getterBalance()}`);
        } else {
            throw new Error;
        }
    }
}