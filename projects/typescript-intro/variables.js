// string, number, boolean, null, undefined
var myName = null;
myName = 'test';
//Arrays
var items = [1, 'test'];
;
// Objects
var account = {
    // // properties
    // name: string,
    // balance: number,
    // status?: string, // if object doesn't have values below, add "?" after property
    // } = {
    name: 'Luis',
    balance: 10
};
// Just using non-Interface method
// let accounts: {}[]; // store array "[]" of objects "{}"
// Interface method
var accounts;
// use "implements" if wanna use interface
var InvestmentAccount = /** @class */ (function () {
    // name;
    // balance;
    // We can use constructor to initialize properties
    // Use "public" if wanna have access to properties outside of class (public by default)
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    // "private" can only be used within the class
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
