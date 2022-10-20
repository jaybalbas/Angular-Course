function MenuItem(itemID: string) { // classes have "Function" type
    return (target: Function) => {
        target.prototype.id = itemID;
    }
}


@MenuItem('abc') // Decorator
class Pizza {
    id: string;
}

@MenuItem('xyz')
class Hamburger {
    id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);