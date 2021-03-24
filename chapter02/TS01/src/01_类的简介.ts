class Person{
  readonly name: string = "孙悟空"
  static age: number = 18
  sex: string = "男"

  static sayHello() {
    console.log("hello TS");
    
  }
}

const per = new Person()

console.log(per)
console.log(per.name);
console.log(Person.age);

console.log('222', Person.name)

// per.name = "tom"
console.log(per.name)

Person.sayHello()
