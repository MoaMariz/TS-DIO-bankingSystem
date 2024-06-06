
export abstract class Account {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor (name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    public deposit = (deposit:number):void => {
        if(this.validateStatus()) {
            this.balance += deposit
            console.log(`Deposit sucessfull! ${this.name}, your new balance is ${this.balance}`);
        }
        else {
            throw new Error;
        }  
    } 

    public withdraw = (withdraw:number):void => {
        if(this.validateStatus()) {
            if (this.balance >= withdraw) {
                this.balance -= withdraw
            console.log(`Withdraw sucessfull! ${this.name}, your new balance is ${this.balance}`);
            }
            else {
                throw new Error;
            }
    }
}

    protected getBalance = ():void => console.log(this.balance)

    protected getterName = (): string => this.name

    protected getterBalance = (): number => this.balance

    protected setterBalance = (newBalance: number): void => {
        this.balance = newBalance
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        else {
            throw new Error
        }
    }
    

}

