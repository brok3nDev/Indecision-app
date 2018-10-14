class Person {
    constructor(name) {
        console.log('test');
    }
    getGreeting() {
        return this.name;
    }
}

const me = new Person('Darion Suggs');
console.log(me.getGreeting());

const other = new Person();
console.log(other);