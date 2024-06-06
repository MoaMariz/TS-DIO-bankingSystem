import {BusinessAccount, RegularAccount, PrivilegedAccount} from './Classes/index'


const newAccount: RegularAccount = new RegularAccount(1234,'Moacir', 11111);
newAccount.deposit(100)
newAccount.withdraw(10)


const newBusinessAccount: BusinessAccount = new BusinessAccount(17890,'ITAU', 11111);
newBusinessAccount.deposit(100)
newBusinessAccount.withdraw(100)
newBusinessAccount.getLoan(100)


const newPrivilegedAccount: PrivilegedAccount = new PrivilegedAccount('Morgan Freeman', 22222);

newPrivilegedAccount.deposit(100)
newBusinessAccount.withdraw(100)


