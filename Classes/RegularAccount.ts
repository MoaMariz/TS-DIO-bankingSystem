import {Account} from './DioAccount'

export class RegularAccount extends Account {
    cpf: number

    constructor(cpf:number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.cpf = cpf
    }
}