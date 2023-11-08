{
    // Getter & setter

    class Bank {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getBalance(): number {
        //     return this._balance;
        // }

        // Getter
        get balance() {
            return this._balance;
        }

    }

    const goribAccount = new Bank(12202, 'Jubair', 12000);
    // goribAccount.addDeposit(10);
    // const balance = goribAccount.getBalance();
    // console.log(balance)

    const balance = goribAccount.balance;
    console.log(balance);

}