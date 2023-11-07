{
    // Access Modifier

    class Bank {
        public readonly id: number;
        public name: string;
        private _balance: number;  // Convention of private variables
        //  protected _balance: number; // This will be available in inherited classes

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance(): number {
            return this._balance;
        }

    }

    const goribAccount = new Bank(12202, 'Jubair', 12000);
    goribAccount.addDeposit(10);
    const balance = goribAccount.getBalance();
    console.log(balance)


}