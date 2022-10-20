// string, number, boolean, null, undefined
let myName: string | null = null;
myName = 'test';

//Arrays
let items: (string | number)[] = [1, 'test'];

// Interface - Use Pascal naming
// won't be compiled into JS
interface IAccount{
    name: string,
    balance: number,
    status?: string,
    deposit?: () =>  void // method . add "?" to make method optional
};


// Objects
const account: IAccount = {
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
let accounts: IAccount[];


// use "implements" if wanna use interface
class InvestmentAccount implements IAccount {
    // name;
    // balance;

    // We can use constructor to initialize properties
    // Use "public" if wanna have access to properties outside of class (public by default)
    constructor (
        public name, public balance
    ) {

    }

    // "private" can only be used within the class
    private withdraw() {

    }
}