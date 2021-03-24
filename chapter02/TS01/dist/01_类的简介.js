"use strict";
class Person {
    constructor() {
        this.name = "孙悟空";
        this.sex = "男";
    }
    static sayHello() {
        console.log("hello TS");
    }
}
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
console.log('222', Person.name);
// per.name = "tom"
console.log(per.name);
Person.sayHello();
