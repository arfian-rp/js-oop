//class
class Person {
  constructor(name) {
    this.name = name;
    this.say1 = function () {
      //nempel di instance
      console.log(`hello my name is ${this.name}`);
    };
  }
  say2() {
    //nempel di prototipe (rekomendasi)
    console.log(`hello my name is ${this.name}`);
  }
}

const dio = new Person("dio");
console.info(dio);
dio.say2();

//class inheritance
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`hi ${name}, my name is employee ${this.firstName}`);
  }
  paint() {
    console.log(`paint shape`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    //super constructor
    super(firstName); //super cuma bisa dipake di constructor
    this.lastName = lastName;
  }
  sayHello(name) {
    console.log(`hi ${name}, my name is manager ${this.firstName}`);
  }
  paint() {
    //super method
    super.paint(); //memanggil method di parent
    console.log(`paint circle`);
  }
}

const budi = new Employee("budi");
budi.sayHello("joko");

const galih = new Manager("galih", "rakha");
galih.sayHello("joko");

galih.paint();
